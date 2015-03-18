var buildFolder = './final/'
        , gulp = require('gulp')
        , fs = require('fs')
        inlineCss = require('gulp-inline-css'),
        cmq = require('gulp-combine-media-queries'),
        inject = require('gulp-inject'),
        clean = require('gulp-clean'); 

var filesToMove = [
        './src/images/**/*.*',
    ]; 

// Get version using NodeJs file system
var getVersion = function () {
    return fs.readFileSync('Version');
};

gulp.task('default', ['inline-css-html','move']);
 
gulp.task('inline-css-html', function() {
    return gulp.src('./src/*.html')
        .pipe(inlineCss({
                applyStyleTags: false,
                applyLinkTags: true,
                removeStyleTags: false,
                removeLinkTags: true
        })).on('error', errorHandler)
        .pipe(inject(gulp.src(['./src/css/responsive.css']), {
          starttag: '<style>',
          endtag: '</style>',
          transform: function (filePath, file) {
            // return file contents as string 
            return file.contents.toString('utf8')
          }
        }))
        .pipe(gulp.dest(buildFolder));
});
 

// gulp.task('cmq', function () {
//   gulp.src('css/*.css')
//     .pipe(cmq({
//       log: true
//     }))
//     .pipe(gulp.dest(buildFolder));
// });

gulp.task('move', function(){
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './src' })
  .pipe(gulp.dest(buildFolder));
});

// Handle the error
function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}