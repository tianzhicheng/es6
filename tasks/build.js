/**
 * Created by cztzc520 on 17/5/20.
 */
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',[
    'browser','server'
]));
