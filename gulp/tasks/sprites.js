var gulp = require('gulp'),
    rename = require('gulp-rename'),
    del = require('del'),
    sprite = require('gulp-svg-sprite');

var config = {
    mode: {
        css: {
            sprite: 'sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', () => {
    return del(['./app/temp/sprite', './app/assets/images/sprites'])
});
gulp.task('createSprite', ['beginClean'], () => {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(sprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});
gulp.task('copySpriteGraphic', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});
gulp.task('copySpriteCSS', ['createSprite'], () => {
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], () => {
    return del('./app/temp/sprite');
});
gulp.task('icons', ['beginClean', 'createSprite','copySpriteGraphic', 'copySpriteCSS', 'endClean']);