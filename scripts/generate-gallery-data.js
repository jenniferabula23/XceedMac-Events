const fs = require('fs')
const path = require('path')

const folders = {
  weddings: 'Weddings',
  corporate: 'Corporate',
  socialgatherings: 'Social Events'
}

const galleryItems = []
const galleryBasePath = path.join(process.cwd(), 'public', 'images', 'gallery')

console.log(' Scanning gallery folders...')

Object.entries(folders).forEach(([folderName, categoryName]) => {
  const folderPath = path.join(galleryBasePath, folderName)
  
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath)
    let count = 0
    
    files.forEach((file, index) => {
      if (file.match(/\.(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG|GIF|WEBP)$/)) {
        galleryItems.push({
          title: `${categoryName} ${index + 1}`,
          category: categoryName,
          image: `/images/gallery/${folderName}/${file}`
        })
        count++
      }
    })
    
    console.log(`  ✓ ${categoryName}: ${count} images`)
  } else {
    console.log(`  ⚠ ${categoryName}: folder not found at ${folderPath}`)
  }
})

// Write to public directory
const outputPath = path.join(process.cwd(), 'public', 'gallery-data.json')
fs.writeFileSync(outputPath, JSON.stringify({ images: galleryItems }, null, 2))

console.log(`\n Generated gallery data with ${galleryItems.length} total images`)
console.log(` Saved to: ${outputPath}`)