const fs = require('fs-extra');
const path = require('path');

// Copy markdown files from submodule to content directory
const contentFiles = [
  'MANIFESTO.md',
  'PHILOSOPHY.md',
  'COMMANDMENTS.md',
  'RITUALS.md',
  'README.md'
];

async function syncContent() {
  const sourceDir = path.join(__dirname, '../content-source');
  const targetDir = path.join(__dirname, '../content');
  
  // Ensure target directory exists
  await fs.ensureDir(targetDir);
  
  // Copy each content file, exiting early if any are missing
  for (const file of contentFiles) {
    const source = path.join(sourceDir, file);
    const target = path.join(targetDir, file);

    if (!(await fs.pathExists(source))) {
      console.log(`✗ ${file} not found in source`);
      process.exit(1);
    }

    await fs.copy(source, target);
    console.log(`✓ Copied ${file}`);
  }
  
  console.log('\n✨ Content sync completed!');
}

syncContent().catch(err => {
  console.error('Error syncing content:', err);
  process.exit(1);
});
