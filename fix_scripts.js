const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const requiredScripts = [
  '../assets/js/db.js',
  '../assets/js/theme.js',
  '../assets/js/lang-manager.js',
  '../assets/js/modals.js',
  '../assets/js/translations.js'
];

fs.readdir(pagesDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    if (path.extname(file) === '.html') {
      const filePath = path.join(pagesDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = false;

      // Find where main.js is
      const mainJsRegex = /<script\s+src="[^"]*main\.js"[^>]*><\/script>/;
      const mainMatch = content.match(mainJsRegex);

      if (mainMatch) {
        const mainTag = mainMatch[0];
        const insertionPoint = mainMatch.index;

        // Check and inject each script if missing
        let scriptsBlock = '';
        requiredScripts.forEach(script => {
          // Normalize path checking (basic check if the script name exists)
          const scriptName = path.basename(script);
          if (!content.includes(scriptName)) {
            scriptsBlock += `<script src="${script}"></script>\n  `;
            updated = true;
          }
        });

        if (updated) {
          const newContent = content.slice(0, insertionPoint) + scriptsBlock + content.slice(insertionPoint);
          fs.writeFileSync(filePath, newContent, 'utf8');
          console.log(`Updated: ${file}`);
        } else {
          console.log(`Skipped (Already up to date): ${file}`);
        }
      } else {
        console.warn(`Warning: main.js not found in ${file}`);
      }
    }
  });
});
