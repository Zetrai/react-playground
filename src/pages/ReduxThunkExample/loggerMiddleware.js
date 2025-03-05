// loggerMiddleware.js
const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching:', action);
  let result = next(action); // Pass action to the next middleware/reducer
  console.log('New State:', store.getState()); // Log updated state
  return result;
};

export default loggerMiddleware;
