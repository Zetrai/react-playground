const manipulateFn = (str) => {
  let maxLen = 0;
  let charSet = new Set();
  let left = 0;

  for (let index in str) {
    const char = str[index];

    while (charSet.has(char)) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(char);
    maxLen = Math.max(maxLen, index - left + 1);
  }
  return maxLen;
};

console.log(manipulateFn('aabbcde') || 'Waiting for Response');

/*
aabbcde

a
aa -> a
ab
abb -> bb -> b
bcde
 */
