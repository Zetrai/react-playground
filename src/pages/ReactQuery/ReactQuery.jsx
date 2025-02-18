import { useMutation, useQuery } from '@tanstack/react-query';

import { fetchPosts, addPost } from './call-apis.service';
import { useEffect, useState } from 'react';

const ReactQuery = () => {
  const [posts, setPosts] = useState([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const newPost = {
    title: 'New Post',
    body: 'This is a new post.',
  };

  const mutation = useMutation({
    mutationKey: ['posts'],
    mutationFn: addPost,
    onSuccess: (data) => {
      console.log('Post Added: ' + data);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    },
    onError: (error) => {
      console.log('Error: ' + error);
    },
  });

  const handleSubmit = () => {
    mutation.mutate(newPost);
  };
  if (data && posts.length == 0) {
    setPosts(data);
  }

  return (
    <div className='flex flex-col justify-center items-center bg-gray-300'>
      <h1 className='text-3xl font-bold mb-3 border-b-4 w-full text-center'>
        ReactQuery
      </h1>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Fetching Posts API using React Query
          </h2>
          <div>
            {isLoading && <>Loading Posts...</>}
            {error && <>Error in fetching posts: {error}</>}
            {!isLoading &&
              !error &&
              data &&
              posts.map((post, index) => <li key={index}>{post.title}</li>)}
          </div>
        </div>
        <div className='flex flex-col justify-center items-center border-2 border-b-sky-700 p-5 gap-5'>
          <h2 className='text-2xl w-full border-b-2 text-center'>
            Adding Posts using React Query(useMutation)
          </h2>
          <button onClick={handleSubmit} className='p-3 bg-amber-600'>
            Add Post
          </button>
          {mutation.isLoading && <div>Adding...</div>}
          {mutation.isError && <div>Error: {mutation.error.message}</div>}
          {mutation.isSuccess && <div>Post added successfully!</div>}
        </div>
      </div>
    </div>
  );
};

export default ReactQuery;
