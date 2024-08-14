import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';

const { LANGUAGE: { EN_US, UA_UA, PL_PL, DE_DE } } = CONSTANTS

const translations = new Map([
  [EN_US,
    {
      counText: 'Count',
      stepText: 'Step',
      incrementText: 'Increment',
      decrementText: 'Decrement'
    }],
  [UA_UA,
    {
      counText: 'Значення лічильника',
      stepText: 'Крок',
      incrementText: 'Збільшити значення',
      decrementText: 'Зменшити значення'
    }
  ],
  [PL_PL,
    {
      counText: 'Wartość licznika',
      stepText: 'Krok',
      incrementText: 'Zwiększ wartość',
      decrementText: 'Zmniejsz wartość'
    }
  ],
  [DE_DE,
    {
      counText: 'Anzahl',
      stepText: 'Schritt',
      incrementText: 'Inkrementieren',
      decrementText: 'Dekrementieren'
    }
  ]
])

const Counter = (props) => {

  const { counter: { count, step }, language, increment, decrement, setStep, setLang } = props;

  const translation = translations.get(language) // отримуємо об'єкт з перекладом
  const { counText, stepText, incrementText, decrementText } = translation;

  console.log(props);
  return (
    <div>
      <select value={language} onChange={({ target: { value } }) => setLang(value)}>
        <option value={EN_US}>English</option>
        <option value={UA_UA}>Ukrainian</option>
        <option value={DE_DE}>Deutch</option>
        <option value={PL_PL}>Polska</option>
      </select>
      <p>{counText}: {count}</p>
      <label>
        {stepText}
        <input
          type='number'
          value={step}
          onChange={({ target: { value } }) => setStep(value)} />
      </label>
      <button onClick={() => increment()}>{incrementText}</button>
      <button onClick={() => decrement()}>{decrementText}</button>
    </div>
  );
}

// function mapStateToProps(state) {
//   return state;
// }

function mapStateToProps(state) {
  console.log(state);
  // return state.counter;
  //{ count: state.counter.count,
  // step: state.counter.step}
  return {
    counter: state.counter,
    language: state.lang
  }
}

// Об'єктний варіант
const mapDispatchToProps = {
  increment,
  decrement,
  setStep,
  setLang
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