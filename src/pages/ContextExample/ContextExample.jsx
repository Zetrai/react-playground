import { useCounterContext } from '../../contexts/counterContext';

const ContextExample = () => {
  const { count, increment, decrement, reset } = useCounterContext();

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
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700'></div>
      </div>
    </div>
  );
};
export default ContextExample;
