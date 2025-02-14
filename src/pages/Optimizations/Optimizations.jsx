import React, {
  lazy,
  Suspense,
  useState,
  useCallback,
  useMemo,
  use,
} from 'react';

const LazyComponent = lazy(() => import('./LazyComponent.jsx'));

const IncrementButton = React.memo(({ incrementCount }) => {
  console.log('Inside Increment btn component');

  return (
    <button
      onClick={incrementCount}
      className='p-2 bg-cyan-800 text-white font-bold rounded-xl'>
      Increment
    </button>
  );
});

const Optimizations = () => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const incrementHandler = useCallback(() => {
    console.log('Inside Increment Handler....');
    setCount((prev) => prev + 1);
  }, []);

  const calculateSum = useMemo(() => {
    console.log('calculating...');
    return arr.reduce((acc, num) => acc + num);
  }, [arr]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        Optimizations
      </h1>
      <div className='flex flex-col'>
        {/* Lazy Component Example */}
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Lazy Component Example
          </h2>
          <p className='italic text-[14px]'>
            In this example, the "LazyComponent" is loaded lazily only when you
            click "Show". This demonstrates how to split your code and load
            components on demand, which can improve performance, especially for
            large applications.
          </p>
          <div className='flex flex-col justify-center items-center'>
            <button onClick={() => setShow(true)}>Show</button>
            {show && (
              <Suspense fallback={<div>Lazy Component Loading...</div>}>
                <LazyComponent />
              </Suspense>
            )}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            React.memo Example
          </h2>
          <p className='italic text-[14px]'>
            The "IncrementButton" component is wrapped with{' '}
            <code>React.memo</code> to prevent unnecessary re-renders. It only
            re-renders when its props change. Additionally, the{' '}
            <code>incrementHandler</code> function is memoized with{' '}
            <code>useCallback</code> to ensure it does not get recreated on
            every render, improving performance when the parent component
            re-renders.
          </p>
          <div className='flex flex-col justify-center items-center gap-3'>
            <p>Count: {count}</p>
            <IncrementButton incrementCount={incrementHandler} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            useMemo Example
          </h2>
          <p className='italic text-[14px]'>
            The <code>useMemo</code> hook is used to memoize the result of the
            sum calculation. This prevents the calculation from being recomputed
            on every render unless the <code>arr</code> array changes. It helps
            in optimizing performance for expensive computations.
          </p>
          <p> Sum of numbers (useMemo): {calculateSum}</p>
        </div>
      </div>
    </div>
  );
};
export default Optimizations;
