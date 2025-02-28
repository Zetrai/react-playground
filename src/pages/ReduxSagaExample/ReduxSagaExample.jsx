import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from './usersSagaSlice';

const ReduxSagaExample = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users2);

  useEffect(() => {
    dispatch(fetchUsersRequest()); // Triggers API call
  }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        Redux Saga Example
      </h1>

      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>User List</h2>
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {users &&
              users.map((user) => {
                return <li key={user.id}>{user.name}</li>;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReduxSagaExample;
