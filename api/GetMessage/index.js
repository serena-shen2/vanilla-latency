module.exports = async function (context, req) {
  const edge = require('edge-js');

const myScript = edge.func({
  assemblyFile: 'myScript.dll',
  typeName: 'Startup',
  methodName: 'Invoke'
});

myScript({ name: 'John' }, (error, result) => {
  if (error) throw error;
  console.log(result);
});
};

