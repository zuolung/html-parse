const parser = require("htmlstr-parser")

console.log(parser(`
  <html>
    <body>
      <div id="root"></div>
    </body>
  </html>
`))