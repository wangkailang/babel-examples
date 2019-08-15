const babelCore = require('@babel/core');

const code = `
function square (n) {
  return n * n;
}
`

// t('hello');
// => <input value="hello"/>
const result = babelCore.transform('code', {
  plugins: [require('./index')]
});

// console.log(result)