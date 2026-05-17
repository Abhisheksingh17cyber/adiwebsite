const fs = require('fs'); const pdf = require('pdf-parse'); pdf(fs.readFileSync('../WEBSITE CONTENT.pdf')).then(data => console.log(data.text));
