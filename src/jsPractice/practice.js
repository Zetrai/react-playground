const manipulateFn = (str1, char, shuffle) => {
  console.log(new RegExp(char, 'g'));
  return str1.replace(char, '');
};
console.log(manipulateFn('adefbc', 'c'));

/*
abccbad
left = 0 , right =0
left = 1, right =1
a
ab
abc
abcc -> bcc -> cc -> c
cb
cba
cbad
*/
