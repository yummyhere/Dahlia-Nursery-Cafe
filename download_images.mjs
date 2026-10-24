import fs from 'node:fs';
import path from 'node:path';

const photos = {
  'date_spot.jpg': 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
  'moment_food.jpg': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
  'moment_drinks.jpg': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
  'moment_vibe.jpg': 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80',
  'greenhouse_pots.jpg': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
  'greenhouse_corner.jpg': 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
  'gallery_coffee.jpg': 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80',
  'gallery_plant.jpg': 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=900&q=80',
  'gallery_table.jpg': 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
  'gallery_details.jpg': 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=900&q=80',
  'gallery_exterior.jpg': 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80',
  'gallery_pastry.jpg': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
  'visit_atmosphere.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
};

const imagesDir = path.resolve('images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

for (const [name, url] of Object.entries(photos)) {
  const dest = path.join(imagesDir, name);
  if (fs.existsSync(dest)) {
    console.log(`Skipping already existing: ${name}`);
    continue;
  }
  try {
    console.log(`Downloading ${name}...`);
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Saved: ${name}`);
  } catch (err) {
    console.error(`Error downloading ${name}:`, err.message);
  }
}
console.log('Finished downloading photos.');
