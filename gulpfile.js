var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass");
gulp.task("hello", function() {
  console.log("Hello Zell");
});
gulp.task("sass-all", function() {
  gulp
    .src("./app/scss/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("./app/css"));
});
gulp.task("sass-header-footer", function() {
  gulp
    .src("./app/scss/index/headfoot.scss")
    .pipe(sass())
    .pipe(gulp.dest("./app/css"));
});

gulp.task("prefix", function() {
  return gulp
    .src("./dist/index.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./app/css"));
});
