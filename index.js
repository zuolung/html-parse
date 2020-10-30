let exportPlugin = {};
if (process.env.NODE_ENV === "production") {
  exportPlugin = require("./lib/parser.min.js");
} else {
  exportPlugin = require("./lib/parser.js");
}

module.exports = exportPlugin;