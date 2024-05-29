import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import legacyPosts from './src/assets/posts/legacy-posts.js';

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, 'src/assets/posts/converted-posts');

// Ensure the base output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to generate a valid filename from the slug
const generateFilename = (slug) => {
    return `${slug}.jsx`;
};

// Function to create a React component from the post
const generateComponent = (title, content) => {
    const componentName = title.replace(/[^a-z0-9]+/gi, '');
    return `import React from 'react'

const ${componentName} = () =>
  <div>
    ${content}
  </div>

export default ${componentName}
`;
};

// Iterate through each post and create a new file in the appropriate directory
legacyPosts.forEach(post => {
    const title = post.title.rendered;
    const content = post.content.rendered;
    const slug = post.slug;
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits
    const dirPath = path.join(outputDir, `${year}`, `${month}`);

    // Ensure the year/month directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const filename = generateFilename(slug);
    const componentCode = generateComponent(title, content);
    
    const filePath = path.join(dirPath, filename);
    fs.writeFileSync(filePath, componentCode, 'utf8');
    console.log(`Generated file: ${filePath}`);
});
