import { 
  dest,
  series,
  src,
 } from 'gulp';
import ts from 'gulp-typescript';

const cleaner = require('gulp-clean');

// --- Constants

const destination = 'dist';

// ---

function clean(cb: any) {
  // cb();
  console.log('Cleaning!');
  return src('dist', { read: false, allowEmpty: true })
    .pipe(cleaner());
}

function tsCompile(cb: any) {
  // cb();
  console.log('Compiling TypeScript');
  return src('src/**/*.ts')
    .pipe(ts({}))
    .pipe(dest(destination));
}

function copyTestYaml(cb: any) {
  // cb();
  const testYamlFile = 'test_input.yaml';
  const files = [ testYamlFile ];
  console.log(`Copying ${testYamlFile} to ${destination}`);
  return src(files)
    .pipe(dest(destination));
}

exports.clean = clean;
exports.build = tsCompile;
exports.default = series(clean, tsCompile, copyTestYaml);