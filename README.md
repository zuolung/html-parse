# html-parse
transform htmlStr to object with Array

# npm i htmlstr-parse
```
const { htmlObjParser, htmlStrParser } = require("html-parser-n");
const fs = require("fs");

fs.writeFileSync('./demo.json', JSON.stringify(
  htmlStrParser(`
  <html>
    <body>
      <span id="root" style="color:red;">我是span标签</span>
    </body>
  </html>
`)
))

console.log(htmlObjParser(require("./demo.json")))
```

# 结果
```
{
    "nodeName":"root",
    "children":[
        {
            "nodeName":"html",
            "children":[
                {
                    "nodeName":"body",
                    "children":[
                        {
                            "nodeName":"div",
                            "children":[],
                            "text":"我是div标签"
                        },
                        {
                            "nodeName":"span",
                            "children":[],
                            "id":"root",
                            "style":{
                                "color":"red"
                            },
                            "text":"我是span标签"
                        }
                    ],
                    "text":"  "
                }
            ]
        }
    ]
}
```