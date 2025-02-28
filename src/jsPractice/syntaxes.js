const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data From Promise');
  }, 1000);
  setTimeout(() => {
    reject('Error');
  }, 2000);
});

const data = await fetchData
  .then((data) => {
    console.log(data);
    return 'data from 1st then';
  })
  .then((data) => {
    console.log(data);
    return 'data from 2nd then';
  })
  .then((data) => {
    console.log(data);
    return 'data from 3rd then';
  })
  .then((data) => {
    console.log(data);
    return 'final data';
  })
  .catch((error) => console.log(error));

console.log(data);
