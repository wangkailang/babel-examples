const babelCore = require ('@babel/core');
const t = require('@babel/types');

const visitor = {
  FunctionDeclaration(path) {
    const node = path.node;
    console.log(node);
  }
};

module.exports = function(babel) {
  return {
    visitor,
  };
};
