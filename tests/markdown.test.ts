import fs from 'fs';
import path from 'path';
import os from 'os';

jest.mock('remark', () => ({
  remark: () => ({
    use: () => ({
      process: async (content: string) => ({
        toString: () => `<p>${content}</p>`,
      }),
    }),
  }),
}));

jest.mock('remark-html', () => ({}));

const originalCwd = process.cwd();
let tempDir: string;
let contentDir: string;

beforeAll(() => {
  tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mdtest-'));
  contentDir = path.join(tempDir, 'content');
  fs.mkdirSync(contentDir);

  fs.writeFileSync(
    path.join(contentDir, 'first.md'),
    `---\ntitle: First\n---\n# Hello`
  );

  fs.writeFileSync(
    path.join(contentDir, 'second.md'),
    `---\ntitle: Second\n---\n## World`
  );

  process.chdir(tempDir);
});

afterAll(() => {
  process.chdir(originalCwd);
  fs.rmSync(tempDir, { recursive: true, force: true });
});

test('getMarkdownContent returns parsed data', async () => {
  const { getMarkdownContent } = await import('../lib/markdown');
  const result = await getMarkdownContent('first.md');
  expect(result.title).toBe('First');
  expect(result.contentHtml).toContain('<p>');
});

test('getAllContent returns all markdown files', async () => {
  const { getAllContent } = await import('../lib/markdown');
  const result = await getAllContent();
  const filenames = result.map((r: any) => r.filename).sort();
  expect(filenames).toEqual(['first', 'second']);
});
