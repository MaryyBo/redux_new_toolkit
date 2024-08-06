import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = (props) => {
  const { count, step, dispatch } = props;

  console.log(props);
  return (
    <div>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Counter);;