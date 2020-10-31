const parser = require("htmlstr-parser");
const fs = require("fs");

fs.writeFileSync('./demo.text', JSON.stringify(
  parser(`
  <html>
    <body>
      <div id="root"></div>
    </body>
  </html>
`)
))