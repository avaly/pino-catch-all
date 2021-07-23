const fastJsonParse = require('fast-json-parse');
const os = require('os');
const split = require('split2');
const { pipeline } = require('stream');
const { promisify } = require('util');

module.exports = function stream({
  hostname = os.hostname(),
  level = 10,
}) {
  level = parseInt(level, 10);

  function processLine(line) {
    if (!fastJsonParse(line).err) {
      return line + '\n';
    }

    return JSON.stringify({
      level,
      time: Date.now(),
      pid: process.pid,
      hostname,
      msg: line,
    }) + '\n';
  }

  promisify(pipeline)([process.stdin, split(processLine), process.stdout]);
};