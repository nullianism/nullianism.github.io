import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(filename: string) {
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  
  return {
    contentHtml,
    ...matterResult.data,
  };
}

export async function getAllContent() {
  const files = await fs.readdir(contentDirectory);
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  
  const allContent = await Promise.all(
    markdownFiles.map(async (filename) => {
      const content = await getMarkdownContent(filename);
      return {
        filename: filename.replace(/\.md$/, ''),
        ...content,
      };
    })
  );
  
  return allContent;
}
