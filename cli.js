#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const stream = require('./stream.js');

function cli() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  program
    .version(pkg.version)
    .option('-h, --hostname <hostname>', 'The hostname of the caught logs. Defaults to current hostname.')
    .option('-l, --level <level>', 'The level of the caught logs. Defaults to `10` ("trace").')
    .action(stream);

  program.parse(process.argv);
}

cli();
