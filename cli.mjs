#!/usr/bin/env node

import fs from 'fs';
import program from 'commander';
import stream from './stream.mjs';

function cli() {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

  program
    .version(pkg.version)
    .option('-h, --hostname <hostname>', 'The hostname of the caught logs. Defaults to current hostname.')
    .option('-l, --level <level>', 'The level of the caught logs. Defaults to "trace".')
    .action(stream);

  program.parse(process.argv);
}

cli();
