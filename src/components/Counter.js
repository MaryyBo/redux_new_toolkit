import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../redux/counterSlice';

const Counter = (props) => {
  const { count, step, increment, decrement, setStep } = props;


  return (
    <div>
      <p>Count: {count}</p>
      <label>
        Set step:
        <input type='number' value={step} onChange={setStep} />
      </label>
      <p>Step: {step}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return state;
// }

function mapStateToProps(state) {
  return {
    count: state.count,
    step: state.step
  }
}

function mapDispatchToProps(dispatch) { // огортає actionCreator в dispatch
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setStep: ({ target: { value } }) => dispatch(setStep(value))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Counter);;


/*
замість такого запису:

onChange={({ target: { value } }) => dispatch(setStep(value))}

можна так: 

onChange={(event) => {
  const value = event.target.value;
  dispatch(setStep(value))};
}

*/