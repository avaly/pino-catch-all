const assert = require('assert');
const { execSync } = require('child_process');

describe('cli', () => {
  it('catches non-JSON lines and reformats them', () => {
    const stdout = execSync(`node ./test.js 2>&1 | ./cli.js`).toString();

    assert.ok(!!/\{"level":10,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Trace log"\}/.exec(stdout));
    assert.ok(!!/\{"level":20,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Debug log"\}/.exec(stdout));
    assert.ok(!!/\{"level":30,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Info log"\}/.exec(stdout));
    assert.ok(!!/\{"level":40,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Warn log"\}/.exec(stdout));
    assert.ok(!!/\{"level":50,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Error log"\}/.exec(stdout));
    assert.ok(!!/\{"level":10,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Normal console.log"\}/.exec(stdout));
    assert.ok(!!/\{"level":10,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Normal console.warn"\}/.exec(stdout));
    assert.ok(!!/\{"level":10,"time":\d+,"pid":\d+,"hostname":"[^"]+","msg":"Normal console.error"\}/.exec(stdout));
  });

  it('catches non-JSON lines and uses custom level and hostname', () => {
    const stdout = execSync(`node ./test.js 2>&1 | ./cli.js --level 40 --hostname foo`).toString();

    assert.ok(!!/\{"level":40,"time":\d+,"pid":\d+,"hostname":"foo","msg":"Normal console.log"\}/.exec(stdout));
    assert.ok(!!/\{"level":40,"time":\d+,"pid":\d+,"hostname":"foo","msg":"Normal console.warn"\}/.exec(stdout));
    assert.ok(!!/\{"level":40,"time":\d+,"pid":\d+,"hostname":"foo","msg":"Normal console.error"\}/.exec(stdout));
  });
});
