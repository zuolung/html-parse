import htmlStrParser from "./parser";

function htmlObjParser(obj) {
  let htmlStr = "";
  function work(obj) {
    const children = obj.children;
    let attrStr = "";
    Object.keys(obj).map(key => {
      if (key !== 'nodeName' && key !== 'text' && key !== "children") {
        if (key !== 'style') {
          attrStr += ` ${key}=${obj[key]}`
        } else if (key === 'style') {
          let styleStr = '';
          Object.keys(obj[key]).map(k => {
            styleStr += ` ${k}:${obj[key][k]};`
          })
          attrStr += styleStr;
        }
      }
    })
    htmlStr += `<${obj.nodeName}${attrStr}>${obj.text ? obj.text : ''}`;
    if (children && children.length) {
      children.map(c => {
        work(c)
      });
    }
    htmlStr += `</${obj.nodeName}>`;
  }
  work(obj);
  return htmlStr;
}

export default {
  htmlObjParser,
  htmlStrParser,
}