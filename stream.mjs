import fastJsonParse from 'fast-json-parse';
import * as os from 'os';
import split from 'split2';
import { pipeline } from 'stream';
import { promisify } from 'util';

export default function stream({
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
}