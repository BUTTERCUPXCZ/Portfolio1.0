const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directory containing images
const imageDir = path.join(__dirname, 'src', 'assets');
const outputDir = path.join(__dirname, 'src', 'assets', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image extensions to process
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

// Process each image
fs.readdirSync(imageDir).forEach(file => {
  const filePath = path.join(imageDir, file);
  const ext = path.extname(file).toLowerCase();
  
  // Skip if not an image file or if it's in the optimized folder
  if (!imageExtensions.includes(ext) || file.includes('optimized')) {
    return;
  }
  
  const outputPath = path.join(outputDir, file);
  console.log(`Optimizing: ${file}`);
  
  sharp(filePath)
    .resize({
      width: 1200,
      height: 1200,
      fit: 'inside',
      withoutEnlargement: true
    })
    .webp({ quality: 80 }) // Convert to WebP for better compression
    .toFile(outputPath.replace(ext, '.webp'))
    .then(() => {
      console.log(`Optimized: ${file} -> ${file.replace(ext, '.webp')}`);
    })
    .catch(err => {
      console.error(`Error optimizing ${file}:`, err);
    });
});
