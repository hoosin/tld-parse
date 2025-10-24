const fs = require('fs');

module.exports = {
  process(sourceText, sourcePath) {
    const rawContent = fs.readFileSync(sourcePath, 'utf-8');
    return {
      code: `module.exports = ${JSON.stringify(rawContent)};`,
    };
  },
};
