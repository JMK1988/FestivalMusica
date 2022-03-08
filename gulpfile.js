const { src, dest, watch, parallel } = require('gulp');
//css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
//imagenes 
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp'); 



function css( done ){
    src('src/scss/**/*.scss')//identificar el archivo .scss a copilar
        .pipe( plumber())
        .pipe( sass() )//copilarlo
        .pipe( dest('build/css') )//almacenarlo
    done();
}

function imagenes(done){
    src('src/img/**/*.{png,jpg}')
    .pipe( )

    done();
}

function versionWebp(done){
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg}')

        .pipe( webp(opciones) )
        .pipe (dest('build/img') ) 

    done();
}

function dev( done ){

    watch('src/scss/**/*.scss', css)

    done();
}

exports.css = css;
exports.versionWebp = versionWebp
exports.dev = parallel( versionWebp, dev);
