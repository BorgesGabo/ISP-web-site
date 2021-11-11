const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("./sass/**/*.scss").pipe(sass()).pipe(dest("./css"));
}
exports.css = css;
exports.default = () => {};
