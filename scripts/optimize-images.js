
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '../src');
const MAX_WIDTH = 1920;
const AVIF_QUALITY = 80;

const VALID_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, file));
        }
    });

    return arrayOfFiles;
}

async function processImages() {
    console.log('🔍 Scanning for images in src directory...');
    const files = getAllFiles(ROOT_DIR);
    const imageFiles = files.filter(file => VALID_EXTENSIONS.includes(path.extname(file).toLowerCase()));

    console.log(`Found ${imageFiles.length} images to process.`);

    let processedCount = 0;
    let skippedCount = 0;

    for (const file of imageFiles) {
        const dir = path.dirname(file);
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const outputPath = path.join(dir, `${name}.avif`);

        // Skip if AVIF already exists (optional, but good for re-running)
        // Uncomment the next line if you want to skip existing AVIFs
        // if (fs.existsSync(outputPath)) { skippedCount++; continue; }

        try {
            console.log(`Processing: ${path.relative(ROOT_DIR, file)} -> avif`);

            await sharp(file)
                .resize({
                    width: MAX_WIDTH,
                    withoutEnlargement: true,
                    fit: 'inside' // Preserves aspect ratio
                })
                .avif({ quality: AVIF_QUALITY })
                .toFile(outputPath);

            processedCount++;
        } catch (error) {
            console.error(`❌ Error processing ${path.relative(ROOT_DIR, file)}:`, error);
        }
    }

    console.log('--------------------------------------------------');
    console.log(`✅ Finished!`);
    console.log(`Processed: ${processedCount}`);
    console.log(`Skipped:   ${skippedCount}`);
}

processImages();
