import { useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

const PracticePage = () => {
  const check = (event) => {
    console.log(event.target.tagName);
  };
  const obj1 = {
    id: 1,
    users: [{ username: 'karan' }],
  };
  const obj2 = cloneDeep(obj1);
  obj2['users'].push({ username: 'jsakfnoi' });
  console.log(obj1, obj2);
  return (
    <div className='flex flex-col justify-center items-center bg-gray-300'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        Practice Page
      </h1>
      <div className='flex flex-col'>
        <div
          className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'
          onClick={check}>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Practicing for different questions
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
