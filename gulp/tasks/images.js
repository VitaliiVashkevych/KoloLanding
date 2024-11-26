import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images, { sourcemaps: true, encoding: false })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>",
      })
    ))
    .pipe(app.plugins.newer(app.path.build.images))
    // .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images))
    // .pipe(app.plugins.newer(app.path.build.images))
    // .pipe(imagemin({
    //   progressive: true,
    //   svgoPlugins: [{ removeViewBox: false }],
    //   interlaced: true,
    //   optimizationLevel: 3
    // }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
};

export const svg = () => {
  return app.gulp.src(app.path.src.svg, { encoding: false })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>",
      })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
}
