/* eslint-disable @typescript-eslint/no-var-requires */
const shell = require('shelljs')
shell.mv('dist/src/*', 'dist/')
shell.rm('-rf', 'dist/src')
