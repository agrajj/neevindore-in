/**
 * This file changes script->src and css->href to point to jsDeliver CDN.
 * jsDeliver CDN in turn uses the files stored in the GitHub repo.
 * This way prod assets are stored in the repo whereas index.html/favicon are
 * stored in the firebase project (Free Plan).
 */
const cheerio = require("cheerio");
const fs = require("fs");
const _ = require("lodash");
const { version } = require("./package.json");
const jsDeliverBase = `https://cdn.jsdelivr.net/agrajj/neevindore-in@${version}/dist`;
const indexFilePath = "dist/html/index.html";

console.log("After build script started...");

// read our index file
console.log("About to rewrite file: ", indexFilePath);
fs.readFile(indexFilePath, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  // load html into cheerio so we can manipulate DOM
  const $ = cheerio.load(data);

  $(`link[rel=stylesheet]`).each((i, el) => {
    const el_href = $(el).attr("href");
    if (el_href && el_href.trim().length > 1)
      $(el).attr(`href`, `${jsDeliverBase}/${el_href}`);
  });

  $(`script`).each((i, el) => {
    const el_src = $(el).attr("src");
    if (el_src && el_src.trim().length > 1)
      $(el).attr(`src`, `${jsDeliverBase}/${el_src}`);
  });

  // now write that file back
  fs.writeFile(indexFilePath, $.html(), function (err) {
    if (err) return console.log(err);
    console.log("Successfully rewrote index html");
  });
});
