# pino-catch-all

> Transforms non-JSON log lines into Pino compatible lines

[![Github Actions](https://github.com/avaly/pino-catch-all/actions/workflows/ci.yaml/badge.svg)](https://github.com/avaly/pino-catch-all/actions)
[![NPM version](https://img.shields.io/npm/v/pino-catch-all.svg?style=flat-square)](https://www.npmjs.com/package/pino-catch-all)
[![Dependencies](https://img.shields.io/david/avaly/pino-catch-all.svg?style=flat-square)](https://david-dm.org/avaly/pino-catch-all)
[![Install size](https://packagephobia.now.sh/badge?p=pino-catch-all)](https://packagephobia.now.sh/result?p=pino-catch-all)

## Installation

Install the module using `yarn`:

```
$ yarn add pino-catch-all
```

Or using `npm`:

```
$ npm install pino-catch-all
```

## Usage

Use it before any other Pino transports to catch all non-JSON lines and transform them into compatible lines:

```
$ node ./app.js | pino-catch-all | pino-pretty
```

## Authors and license

Author: [Valentin Agachi](http://agachi.name/).

MIT License, see the included [License.md](License.md) file.