# html-parse
transform htmlStr to object with Array

# npm i htmlstr-parser
```
const parser = require("htmlstr-parser");
const fs = require("fs");

fs.writeFileSync('./demo.text', JSON.stringify(
  parser(`
  <html>
    <body>
      <span id="root" style="color:red;">我是span标签</span>
    </body>
  </html>
`)
))
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