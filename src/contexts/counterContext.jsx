import { createContext, useContext, useReducer } from 'react';

const COUNTER_ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return { ...state, count: state.count + 1 };
    case COUNTER_ACTION_TYPES.DECREMENT:
      if (state.count === 0) return state;
      return { ...state, count: state.count - 1 };
    case COUNTER_ACTION_TYPES.RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT });
  const decrement = () => dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT });
  const reset = () => dispatch({ type: COUNTER_ACTION_TYPES.RESET });

  return (
    <CounterContext.Provider value={{ ...state, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => useContext(CounterContext);
