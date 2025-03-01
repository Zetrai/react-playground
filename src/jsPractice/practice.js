const manipulateFn = (arr) => {
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
console.log(manipulateFn([2, 4, 6, 2, 5, 6, 4]));

const myPromise2 = () => Promise.resolve('I have resolved!');

async function secondFunction() {
  setTimeout(() => {
    console.log('timeout');
  }, 1000); // Fixed the syntax here

  console.log(myPromise2());
  console.log('second');
}

secondFunction();
