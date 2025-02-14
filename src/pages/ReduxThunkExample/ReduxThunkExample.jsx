import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';

import { fetchUsers, selectUsers } from './usersSlice';

const ReduxThunkExample = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(selectUsers);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (users.length === 0) dispatch(fetchUsers());
  }, [dispatch, users.length]);

  const onChangeHandler = useCallback(
    debounce((search) => {
      setSearch(search);
    }, 500),
    []
  );

  useEffect(() => {
    // Filter users when search term changes
    if (search) {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredUsers(users);
    }
  }, [search, users]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        ReduxThunkExample
      </h1>

      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>User List</h2>
          <p className='italic text-[14px]'>
            The list of users is fetched from the Redux store. The users are
            filtered based on the search term entered in the input field.
          </p>
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error...</div>}
            {filteredUsers &&
              filteredUsers.map((user) => {
                return <li key={user.id}>{user.name}</li>;
              })}
          </div>
        </div>

        {/* Deboucing Example */}
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Debouncing Example
          </h2>
          <p className='italic text-[14px]'>
            The input field uses debouncing to reduce the number of times the
            search function is triggered as the user types. The search input is
            debounced to trigger the filtering function only after 500ms of
            inactivity.
          </p>
          <div>
            <input
              type='text'
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
              placeholder='Search users...'
              className='p-2 border rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReduxThunkExample;
