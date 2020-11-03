import htmlStrParser from "./parser";

function htmlObjParser(obj) {
  let htmlStr = "";
  function work(obj) {
    const children = obj.children;
    htmlStr += `<${obj.nodeName}>${obj.text ? obj.text : ''}`;
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