// How do you reverse a string without using .reverse()?
console.log('Reverse a string without using .reverse()');

const s1 = 'abc';
const revStr1 = s1.split('').reduce((acc, char) => char + acc, '');
console.log(revStr1);
console.log('......................');

// How do you check if a string is a palindrome?

let s2 = 'abccba';
const revStr2 = s2.split('').reduce((acc, char) => char + acc, '');
console.log('Palindrome: ', revStr2 === s2);
console.log('......................');

// How do you count the occurrences of each character in a string?
console.log('How do you count the occurrences of each character in a string?');

let s3 = 'aabcc';
const countStr = s3.split('').reduce((acc, char) => {
  acc[char] = acc[char] || 0 + 1;
  return acc;
}, {});

console.log(countStr);
console.log('......................');

// How do you check if two strings are anagrams?
let s4 = 'listen';
let s5 = 'silent';

const sortMethod = (str) => {
  return str.split('').sort().join('');
};

console.log('Anagrams: ', sortMethod(s4) === sortMethod(s5));

const isAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const countChars = {};

  for (let char of str1) {
    countChars[char] = (countChars[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!countChars[char]) return false;
    countChars[char]--;
  }

  return true;
};

console.log(isAnagrams('listen', 'silent'));

console.log('......................');

// How do you extract numbers from a given string?
let s6 = 'ab255y44';
const extractNum = s6.match(/\d+/g).map(Number);
console.log('Numbers: ', extractNum);

console.log('......................');

console.log('How do you replace all occurrences of a substring in a string?');
let s7 = 'Hello world';
const newStr = s7.replaceAll('Hello', 'World');
const newStr2 = s7.replace(/Hello/g, 'World');
console.log('Using ReplaceAll: ' + newStr);
console.log('Using Replace and regex: ' + newStr2);
console.log('......................');

//How do you find the first non-repeating character in a string?
console.log('How do you find the first non-repeating character in a string?');

const s8 = 'abbc';
const countChar = {};
for (const char of s8) {
  countChar[char] = (countChar[char] || 0) + 1;
}
for (const char of s8) {
  if (countChar[char] === 1) {
    console.log('First non repearing character: ', char);
    break;
  }
}

const findFirstUnique = (str) => {
  const count = new Map();

  for (let char of str) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const [char, freq] of count) {
    if (freq === 1) return char;
  }
  return null;
};

console.log(findFirstUnique('aabcf'));

console.log('......................');

// How do you count the number of vowels in a string?
console.log('How do you count the number of vowels in a string?');

const s9 = 'abceede';
const vowelsArray = s9.match(/[aeiou]/gi);
console.log('Count of vowels: ', vowelsArray.length);

// How do you find the longest word in a string?
console.log('How do you find the longest word in a string?');

const st1 = 'Today is Cloudy';
const st1Arr = st1.split(' ');
console.log(st1Arr);

const longestWord = st1Arr.reduce(
  (longest, word) => (word.length > longest.length ? word : longest),
  ''
);
console.log(longestWord);

console.log('......................');

// How do you capitalize the first letter of each word in a string?
console.log('How do you capitalize the first letter of each word in a string?');

const st2 = 'today is cloudy';
const st2Arr = st2.split(' ');

const res2 = st2Arr
  .map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(' ');
console.log('Capital first letter of words: ', res2);
console.log('......................');

// How do you remove duplicate characters from a string?
console.log('How do you remove duplicate characters from a string?');

const st3 = 'aabc';

const res3 = [...new Set(st3.split(''))].join('');

console.log(res3);
console.log('......................');

//How do you count the occurrences of each character in a string?
console.log('How do you count the occurrences of each character in a string?');

const st4 = 'aabvcc';
const st4Arr = st4.split('');

const countChars = st4Arr.reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(countChars);

console.log('......................');

// How do you find the longest substring without repeating characters?
console.log(
  'How do you find the longest substring without repeating characters?'
);

const st5 = 'abccbad';

/*
abccbad
abc
while -bcc -> cc -> c
cb
cba
cbad
*/
const lengthSub = (str) => {
  let maxLen = 0;
  const charSet = new Set();
  let left = 0;

  for (let index in str) {
    while (charSet.has(str[index])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[index]);
    maxLen = Math.max(maxLen, index - left + 1);
  }

  return maxLen;
};

console.log(lengthSub(st5));

console.log('......................');

//How do you reverse the words in a sentence but keep their order?
console.log('How do you reverse the words in a sentence but keep their order?');

const st6 = 'Hello World';

const st6Arr = st6.split(' ');
const rev6Str = (str) => {
  return str.split('').reduce((acc, char) => char + acc, '');
};
console.log(st6Arr.map(rev6Str).join(' '));
console.log('......................');

//How do you check if a string contains only unique characters?
console.log('How do you check if a string contains only unique characters?');

const st7 = 'helo';
let check = true;

st7.split('').forEach((char, index) => {
  if (st7.indexOf(char) !== index) check = false;
});
console.log('Unique Characher? ', check);

console.log('......................');

// How do you find the most frequent character in a string?
console.log('How do you find the most frequent character in a string?');

const st8 = 'banana';

const maxCharFind = (str) => {
  const count = {};
  let maxChar = '';
  let maxCount = 0;

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }
  return `${maxChar}: ${maxCount}`;
};
console.log(maxCharFind(st8));

console.log('......................');

//How do you check if one string is a rotation of another?
console.log('How do you check if one string is a rotation of another?');

const st9 = 'abcd';
const st10 = 'cdab';

const checkIfRotated = (str1, str2) => {
  return str1.length === str2.length && (str1 + str1).includes(str2);
};

console.log(checkIfRotated(st9, st10));

console.log('......................');

//How do you compress a string using character counts?
console.log('How do you compress a string using character counts?');

const ns1 = 'aaabbcaabbccccdddooo';

const compressStr = (str) => {
  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 0;
    }
  }
  return compressed.length < str.length ? compressed : str;
};
console.log(compressStr(ns1));
console.log('......................');

// How do you find all substrings of a given string?
console.log('How do you find all substrings of a given string?');

const ns2 = 'abc';
// a, ab, abc, b, bc, c

const findAllSubs = (str) => {
  const len = str.length;
  const totalSubs = (len * (len + 1)) / 2;
  let left = 0;
  let right = 1;
  const subs = [];

  for (let i = 1; i <= totalSubs; i++) {
    const sub = str.substring(left, right);
    subs.push(sub);

    if (right === len) {
      left++;
      right = left + 1;
    } else {
      right++;
    }
  }
  return subs;
};
const findAllSubs2 = (str) => {
  const subs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subs.push(str.substring(i, j));
    }
  }
  return subs;
};

console.log(findAllSubs(ns2));
console.log('......................');

// How do you find the longest common prefix among an array of strings?
//Example: ['flower', 'flow', 'flight'] → "fl"
console.log(
  'How do you find the longest common prefix among an array of strings?'
);

const ns3 = ['flower', 'flow', 'fight'];

const findLongestCommonPrefix = (arr) => {
  if (!arr.length) return '';

  let prefix = arr[0];

  for (let word of arr) {
    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }
  return prefix;
};

console.log(findLongestCommonPrefix(ns3));
console.log('......................');

console.log('......................');
console.log('......................');
