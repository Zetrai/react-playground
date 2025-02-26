import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import client from './apolloClient';

// ✅ Query: Fetch first 10 countries
const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

// ✅ Mutation: Add a new country (Assuming API supports it)
const ADD_COUNTRY = gql`
  mutation AddCountry($code: String!, $name: String!, $emoji: String!) {
    addCountry(code: $code, name: $name, emoji: $emoji) {
      code
      name
      emoji
    }
  }
`;

const GraphQLExample = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const first10Countries = data?.countries.slice(0, 10);

  console.log('Apollo Cache:', client.cache.extract());

  const [addCountry] = useMutation(ADD_COUNTRY, {
    update(cache, { data: { addCountry } }) {
      cache.modify({
        fields: {
          countries(existingCountries = []) {
            return [...existingCountries, addCountry];
          },
        },
      });
    },
  });

  // State for new country input
  const [newCountry, setNewCountry] = useState({
    code: '',
    name: '',
    emoji: '',
  });

  return (
    <div className='flex flex-col justify-center items-center bg-gray-300 min-h-screen'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        GraphQL Query & Mutation
      </h1>

      {/* Display Countries */}
      <div className='flex flex-col justify-center items-center border-2 p-5 gap-5'>
        <h2 className='text-2xl w-full border-b-2 text-center'>Country List</h2>
        {loading && <div>Loading...</div>}
        {error && <div>Error loading countries</div>}
        {data && (
          <ul>
            {first10Countries.map((country) => (
              <li key={country.code}>
                {country.emoji} {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add a New Country */}
      <h3 className='text-xl mt-4'>Add Country</h3>
      <input
        type='text'
        placeholder='Code'
        value={newCountry.code}
        onChange={(e) => setNewCountry({ ...newCountry, code: e.target.value })}
      />
      <input
        type='text'
        placeholder='Name'
        value={newCountry.name}
        onChange={(e) => setNewCountry({ ...newCountry, name: e.target.value })}
      />
      <input
        type='text'
        placeholder='Emoji'
        value={newCountry.emoji}
        onChange={(e) =>
          setNewCountry({ ...newCountry, emoji: e.target.value })
        }
      />
      <button
        onClick={() => addCountry({ variables: newCountry })}
        className='bg-blue-500 text-white px-4 py-2 mt-2'>
        Add Country
      </button>
    </div>
  );
};

export default GraphQLExample;
