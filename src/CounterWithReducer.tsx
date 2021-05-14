import React, { useReducer } from 'react';

type StateType = { count: number };
const initialState: StateType = { count: 0 };

type ActionType = { type: 'decrement' | 'increment' | 'reset' };

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>
        マイナス１
      </button>
      <button onClick={() => dispatch({ type: 'increment' })}>プラス１</button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>リセット</button>
    </>
  );
}

export default CounterWithReducer;
