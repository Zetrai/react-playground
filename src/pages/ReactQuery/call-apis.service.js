export const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(
    (res) => res.json()
  );
};

export const addPost = (newPost) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};
