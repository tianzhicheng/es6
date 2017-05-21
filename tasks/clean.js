/**
 * Created by cztzc520 on 17/5/20.
 */
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
    return del(['server/public','server/views'])
})

