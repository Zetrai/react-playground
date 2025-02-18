import { useCallback, useEffect, useState } from 'react';
import { useCounterContext } from '../../contexts/counterContext';
import { debounce } from 'lodash';

const ContextExample = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);
  const { count, increment, decrement, incrementByValue, reset } =
    useCounterContext();

  const changeHandler = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    debouncedIncrementByValue(newValue);
  };

  const debouncedIncrementByValue = useCallback(
    debounce((val) => {
      setShow(val);
      setValue(0);
      incrementByValue(val);
    }, 500),
    [incrementByValue] // Memoize to avoid re-creating it on every render
  );

  useEffect(() => {
    if (show && value) setShow(false);
  }, [value]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        ContextExample
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Counter Context
          </h2>
          <p className='italic text-[14px]'>
            This section demonstrates how to use React Context for managing
            global state. The counter state (`count`) is shared across the app
            using the Context API.
          </p>

          <p className='text-2xl font-bold'>Count: {count}</p>
          <div className='flex flex-row gap-2'>
            <button
              className='p-2 bg-cyan-800 text-white font-bold rounded-xl'
              onClick={() => {
                increment();
              }}>
              Increment
            </button>
            <button
              className='p-2 bg-cyan-800 text-white font-bold rounded-xl'
              onClick={() => {
                decrement();
              }}>
              Decrement
            </button>
            <button
              className='p-2 bg-cyan-800 text-white font-bold rounded-xl'
              onClick={() => {
                reset();
              }}>
              Reset
            </button>
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <input
              type='number'
              value={value}
              onChange={changeHandler}
              className='border-2'
            />
            {show && (
              <p>
                Incremented by <b>{show}</b>
              </p>
            )}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700'></div>
      </div>
    </div>
  );
};
export default ContextExample;
