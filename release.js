const { version } = require("./package.json");

const { exec } = require("child_process");
var yourscript = exec(
  `git add . && git commit -m "release: v${version}" && git checkout master && git push origin --verbose && gh release create v${version} && git pull --verbose`,
  (error, stdout, stderr) => {
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    if (error !== null) {
      console.error(`exec error: ${error}`);
    }
  }
);
