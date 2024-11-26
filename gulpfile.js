import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { plugins } from "./gulp/config/plugins.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images, svg } from "./gulp/tasks/images.js";
import ttf2woff2 from "gulp-ttf2woff2";

global.app = {
  path: path,
  gulp: gulp,
  plugins,
};

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.images, svg);
}

async function fonts() {
  return gulp
    .src(["src/fonts/*.ttf"], {
      encoding: false,
      removeBOM: false,
    })
    .pipe(ttf2woff2())
    .pipe(gulp.dest("dist/fonts/"));
}

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images, svg));
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", dev);
