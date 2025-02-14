import { lazy, Suspense } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const ContextExample = lazy(() =>
  import('./pages/ContextExample/ContextExample')
);
const ReduxExample = lazy(() => import('./pages/ReduxExample/ReduxExample'));
const ReduxThunkExample = lazy(() =>
  import('./pages/ReduxThunkExample/ReduxThunkExample')
);
const Optimizations = lazy(() => import('./pages/Optimizations/Optimizations'));

const App = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='w-full h-[10%] p-5 flex justify-center items-center gap-5 bg-emerald-800 text-white'>
        <Link to='/context' className='font-bold'>
          Context
        </Link>
        <Link to='/redux' className='font-bold'>
          Redux
        </Link>
        <Link to='/redux-thunk' className='font-bold'>
          Redux-Thunk
        </Link>
        <Link to='/optimizations' className='font-bold'>
          Optimizations
        </Link>
      </div>
      <div className='w-full h-[90%] bg-gray-300'>
        <Suspense fallback={<div>Global Fallback UI</div>}>
          <Routes>
            <Route path='/' element={<Navigate to='/context' replace />} />
            <Route path='/context' element={ContextExample} />
            <Route path='/redux' element={ReduxExample} />
            <Route path='/redux-thunk' element={ReduxThunkExample} />
            <Route path='/optimizations' element={Optimizations} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
export default App;
