import React from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment } from '../redux/slices/counterSlice';

const Counter = (): React.ReactElement => {
  const { value } = useAppSelector((selector) => selector.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1 className="mb-4">Counter: {value}</h1>

      <div className="flex gap-2">
        <button className="btn btn-teal" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-red" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};
export default Counter;
