const { htmlObjParser, htmlStrParser } = require("./index");

const fs = require("fs");

fs.writeFileSync(
  "./demo.json",
  JSON.stringify(
    htmlStrParser(`
  <html>
    <meta charset="utf-8">
    <body>
      <span id="root" style="color:red;">我是span标签</span>
    </body>
  </html>
`)
  )
);

console.log(htmlObjParser(require("./demo.json")));
