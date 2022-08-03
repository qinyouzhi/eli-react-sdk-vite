const shell = require('shelljs');

shell.cp('-R', 'src/assets', 'esm/src/assets/');

shell.cp('-R', 'src/assets', 'lib/src/assets/');
