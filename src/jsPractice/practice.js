import cloneDeep from 'lodash/cloneDeep.js'; // Only imports `cloneDeep`

const manipulateFn = (str) => {
  const obj = { name: 'karan', details: { age: 26 } };
  const obj2 = cloneDeep(obj);
  obj2.details.age = 35;
  console.log(obj);
  console.log(obj2);
  return '';
};
console.log(manipulateFn('abcba'));
