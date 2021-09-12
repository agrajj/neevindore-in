const { version } = require("./package.json");

const { exec } = require("child_process");
var yourscript = exec(
  `git checkout master && git push origin && gh release create v${version}`,
  (error, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    if (error !== null) {
      console.error(`exec error: ${error}`);
    }
  }
);
