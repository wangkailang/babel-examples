import babelParser from '@babel/parser';

// JSX
const jsxCode = `
t('你好')
`;

const jsxFormat = babelParser.parse(jsxCode, {
  sourceType: 'module',
  // plugins: [
  //   'jsx',
  // ]
});

// const jsxEFormat = babelParser.parseExpression(jsxCode, {
//   sourceType: 'module',
//   plugins: ['jsx'],
// });


console.log('jsx format', JSON.stringify(jsxFormat));



