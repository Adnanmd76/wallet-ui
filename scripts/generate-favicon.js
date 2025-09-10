const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Create a simple SVG icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="50" fill="#3498db"/>
  <rect x="100" y="150" width="312" height="212" rx="20" fill="#2980b9"/>
  <circle cx="256" cy="256" r="40" fill="#ffffff"/>
  <rect x="150" y="320" width="212" height="20" rx="10" fill="#ffffff"/>
  <rect x="150" y="350" width="150" height="20" rx="10" fill="#ffffff"/>
</svg>
`;

// Create directories if they don't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate different sizes of PNG icons
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'favicon-192.png' },
  { size: 512, name: 'maskable-icon-512x512.png' }
];

async function generateFavicons() {
  try {
    // Generate SVG file
    fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgIcon);
    
    // Generate PNG files
    for (const { size, name } of sizes) {
      await sharp(Buffer.from(svgIcon))
        .resize(size, size)
        .toFile(path.join(publicDir, name));
    }
    
    console.log('Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();