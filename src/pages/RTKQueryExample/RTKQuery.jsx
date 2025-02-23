import { useGetUsersQuery, useAddUserMutation } from './apiSlice';
import { useState } from 'react';

const RTKQuery = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [localUsers, setLocalUsers] = useState([]);
  const [name, setName] = useState('');

  const handleAddUser = async () => {
    if (!name.trim()) return; // Prevent empty user names
    const newUser = { name };
    const response = await addUser(newUser).unwrap(); // unwrap is like response.json
    setLocalUsers((prev) => [response, ...prev]); // Manually update the UI
    setName(''); // Clear input after adding
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        RTK Query
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>User List</h2>
          <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error loading users</div>}
            {users &&
              [...localUsers, ...users].map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </div>
        </div>

        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>Add User</h2>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter user name'
            className='border p-2'
          />
          <button onClick={handleAddUser} className='p-3 bg-amber-600'>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default RTKQuery;
