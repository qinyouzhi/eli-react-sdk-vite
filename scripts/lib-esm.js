const shell = require('shelljs');
const constant = require('./constant');

if (shell.exec('ttsc -p tsconfig.json --target ES5 --module ESNext --outDir esm').code !== 0) {
  shell.echo('Error: lin cjs failed');
  shell.exit(1);
} else {
  shell.cp('-R', 'src/assets', 'esm/');

  shell.ls('esm/utils/interceptor.js').forEach(function (file) {
    shell.sed('-i', 'PUBLIC_BASE_URL', constant.PUBLIC_BASE_URL, file);
  });
}
