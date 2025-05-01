const fs = require('fs');
const path = require('path');

// constant 
const registryPath = path.join(__dirname, 'templates');

function listTemplates() {
  try {
    const result = {};
    const allCategories = fs.readdirSync(registryPath);

    for (const category of allCategories) {
      const categoryPath = path.join(registryPath, category);
      if (!fs.statSync(categoryPath).isDirectory()) continue;

      result[category] = {};

      const allFolders = fs.readdirSync(categoryPath);
      for (const folder of allFolders) {
        const folderPath = path.join(categoryPath, folder);
        if (!fs.statSync(folderPath).isDirectory()) continue;

        const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.json'));
        result[category][folder] = files;
      }
    }

    return [result, null];
  } catch (err) {
    return [null, err.message || err];
  }
}

function getTemplate(category, name) {
  try {
    if (!category || !name) return [null, "No category or name provided"];
    if (category !== "app" && category !== "components") return [null, "Invalid category"];

    const categoryPath = path.join(registryPath, category);
    const folders = fs.readdirSync(categoryPath);

    for (const folder of folders) {
      const folderPath = path.join(categoryPath, folder);
      const stats = fs.statSync(folderPath);
      if (stats.isDirectory()) {
        const files = fs.readdirSync(folderPath);
        if (files.includes(name)) {
          const templatePath = path.join(folderPath, name);
          return [JSON.stringify(require(templatePath)), null];
        }
      }
    }
    return [null, `No Registry Found For:"${name}"`];
  } catch (err) {
    return [null, err.message || err];
  }
}
module.exports = {
  listTemplates,
  getTemplate,
};
