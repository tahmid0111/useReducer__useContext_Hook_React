import React, {useReducer} from 'react'
import Header from '../header/header';
const initialState = {
    count: 0,
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return { count: 0 };
      default:
        return state;
    }
  }

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <Header />
    <div className='text-center'>
      <h1 className='text-5xl text-yellow-500 py-20'>Counter: {state.count}</h1>
      <button className='btn btn-primary mx-10' onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button className='btn btn-error mx-10' onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button className='btn btn-warning mx-10' onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
    </>
  )
}

export default Counter
