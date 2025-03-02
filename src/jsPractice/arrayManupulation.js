// How do you remove duplicates from an array?
console.log('Remove Duplicates Output');
const a1 = [1, 2, 3, 3, 2];

const b = [...new Set(a1)];
console.log('using set: ', b);
let uniques = a1.filter((num, index) => a1.indexOf(num) === index);
const seen = {};
uniques = a1.filter((num) => !seen[num] && (seen[num] = true));
uniques = a1.filter((num) => {
  if (!seen[num]) {
    seen[num] = true;
    return true; // Keep the first occurrence of the number
  }
  return false;
});
console.log('using filer', uniques);
console.log('......................');

//How do you find the maximum and minimum values in an array?
console.log('Find max min');
const a2 = [1, 4, 6, 8];

let max = Math.max(...a2);
let min = Math.min(...a2);
console.log('using inbuilt Math.max, Math.min', max, min);
max = a2[0];
min = a2[0];
a2.forEach((num) => {
  if (num > max) max = num;
  if (num < max) min = num;
});
console.log('using forEach', max, min);
console.log('......................');

// How do you check if an array contains a specific element?
console.log('Find specific elment');
const a3 = [1, 2, 3, 4];
console.log(a3.indexOf(3));
console.log('......................');

// How do you reverse an array without modifying the original one?
console.log('Reverse Array without modiying ');
const a4 = [1, 2, 3, 4];
let revArr = a4.reduce((acc, num) => [num, ...acc], []);
revArr = a4.map((_, i) => a4[a4.length - i - 1]);
console.log(revArr);
console.log('......................');

// What is the difference between .splice() and .slice()?
console.log('Slice vs Splice');
let a5 = [1, 2, 3, 4, 5];

// splice(start, deleteCount, itemsToInsert...)
a5.splice(1, 2); // Removes 2 elements starting from index 1 → arr = [1, 4, 5]
console.log(a5);
a5 = [1, 2, 3, 4, 5];
// slice(start, end) - does not modify original
const sliced = a5.slice(1, 3); // [2, 3]
console.log(sliced);
console.log('......................');

// How do you flatten a nested array (e.g., [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5])?

const a6 = [1, [2, [3, 4]], 5];

const flatArr1 = a6.flat(Infinity);
console.log('Using flat method: ', flatArr1);

const flattenArrays = (arr, depth) => {
  if (depth === -1) return [];

  return arr.reduce((acc, num) => {
    if (Array.isArray(num)) {
      return acc.concat(flattenArrays(num, depth - 1));
    } else {
      return acc.concat(num);
    }
  }, []);
};
console.log('Using reduce method: ', flattenArrays(a6, 3));
console.log('......................');

// How do you find the intersection of two arrays?
let a7 = [1, 2, 3, 5, 4];
let a8 = [2, 3, 4];

const setArr = new Set(a8);
const intersaction = a7.filter((num) => setArr.has(num));

console.log('Intersaction between [1, 2, 3] and [2, 3, 4]: ', intersaction);

const findIntersaction = (arr1, arr2) => {
  let map = {};
  let result = [];

  arr1.forEach((num) => {
    map[num] = map[num] || 0 + 1;
  });

  arr2.forEach((num) => {
    if (map[num]) {
      result.push(num);
      map[num] = 0;
    }
  });
  return result;
};
console.log(findIntersaction(a7, a8));

console.log('......................');

// How do you group an array of objects by a property?

console.log('How do you group an array of objects by a property?');
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
];

const ageObj = people.reduce((acc, person) => {
  const { age } = person;

  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});
console.log(ageObj);

const groupbyProperty = (arr, key) => {
  return arr.reduce((acc, person) => {
    const groupKey = person[key];
    acc[groupKey] = acc[groupKey] || [];

    acc[groupKey].push(person);
    return acc;
  }, {});
};

console.log('......................');

// How do you find the missing number in an array of consecutive numbers?

console.log(
  'How do you find the missing number in an array of consecutive numbers?'
);
const a9 = [1, 2, 4, 5];

const len = a9.length;
const expectedSum = ((len + 1) * (len + 2)) / 2;
const actualSum = a9.reduce((acc, num) => acc + num);
console.log('Missing Num: ', expectedSum - actualSum);
console.log('......................');

// How do you find the missing numbers in an array of consecutive numbers?

console.log(
  'How do you find the missing numbers in an array of consecutive numbers?'
);
const a10 = [1, 2, 5, 6, 9];
const missingNums = [];
let index = 0;

for (let i = a10[0]; i <= a10[a10.length - 1]; i++) {
  if (i !== a10[index]) {
    missingNums.push(i);
  } else {
    index++;
  }
}

console.log('Missing Numbers: ', missingNums);
console.log('......................');

// How do you rotate an array k times to the right (e.g., [1,2,3,4,5] → [4,5,1,2,3] for k=2)?

console.log(
  'How do you rotate an array k times to the right (e.g., [1,2,3,4,5] → [4,5,1,2,3] for k=2)?'
);
const b1 = [1, 2, 3, 4, 5];
let k = 8;
const b1Len = b1.length;
k = k % b1Len;

const slice1 = b1.slice(0, -k);
const slice2 = b1.slice(-k, b1Len);

const rotateArr = [...slice2, ...slice1];

console.log(`Rotating to right by ${k} steps: [${rotateArr}]`);

console.log('......................');

// How do you check if two arrays are equal?'
console.log('How do you check if two arrays are equal?');

const b2 = [1, 2, 3, 4, 5];
const b3 = [1, 2, 3, 4, 5];

if (b2.length !== b3.length) console.log('Not Equal');
const check = b2.every((num, index) => num === b3[index]);
console.log('Equal Arrays', check);

console.log('......................');
// Given an array of numbers, move all zeroes to the end while keeping order.
console.log(
  'Given an array of numbers, move all zeroes to the end while keeping order.'
);

const b4 = [1, 2, 0, 0, 5, 6];

const moveZeros = (arr) => {
  const arr2 = [];
  const arr3 = [];

  arr.forEach((num) => {
    num === 0 ? arr2.push(num) : arr3.push(num);
  });
  return [...arr3, ...arr2];
};

console.log(moveZeros(b4));

console.log('......................');

//Find the First Non-Repeating Element
console.log('Find the First Non-Repeating Element');

const b5 = [1, 2, 3, 3, 4, 1];

const findFirstUnique = (arr) => {
  const count = {};

  arr.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  return arr.find((num) => count[num] === 1);
};

console.log(findFirstUnique(b5));

console.log('......................');

// Find Common and uniques in an array
const findCommonAndUniques = (arr) => {
  const freqMap = new Map();
  const commons = new Set();
  const uniques = new Set(arr);

  arr.forEach((num) => {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  });

  for (let [num, freq] of freqMap) {
    if (freq > 1) commons.add(num);
  }

  console.log([...uniques]);
  console.log([...commons]);
};
console.log(findCommonAndUniques([2, 4, 6, 2, 5, 6, 4]));

console.log('......................');
