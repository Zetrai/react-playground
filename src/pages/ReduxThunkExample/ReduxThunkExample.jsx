import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from './usersSlice';

const ReduxThunkExample = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(selectUsers);

  useEffect(() => {
    if (users.length === 0) dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        ReduxThunkExample
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
            <h2 className='text-2xl w-full border-b-2 text-center'>
              User List
            </h2>
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
      </h1>
    </div>
  );
};
export default ReduxThunkExample;
