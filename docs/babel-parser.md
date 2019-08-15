# [@babel/parser](https://babeljs.io/docs/en/next/babel-parser.html)

## Install
```bash
yarn add @babel/parser --dev
# or
npm install --save-dev @babel/parser
```

Babel Paser(之前叫 Babylon)是 Javascript 的 Babel 解析器，最初从 [Acorn](https://github.com/acornjs/acorn) 项目 fork 出来(jsx 基于 [acorn-jsx](https://github.com/RReverser/acorn-jsx))。针对非标准特性（或者未来的标准特性）设计的插件。包括：
- 默认启用最新的 ECMAScript（ES2017）
- 支持 `JSX`,`Flow`, `Typescript`
- 支持试验性提案特征（[stage-0](https://github.com/tc39/proposals/blob/master/stage-0-proposals.md)）

## API
`babelParser.parse(code, [options])`

`babelParser.parseExpression(code, [options])`

## Options
- **allowImportExportEverywhere**: 默认，支持 `import` 和 `export`
- **allowAwaitOutsideFunction**: 默认，支持 `await`
- ...


