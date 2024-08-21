import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, setStep } from '../../store/slices/counterSlice';
import { setLang } from '../../store/slices/langSlice';
import CONSTANTS from '../../constants';
import styles from './Counter.module.scss';
import classNames from 'classnames'; // cx
import { bindActionCreators } from '@reduxjs/toolkit';

const { LANGUAGE: { EN_US, UA_UA, PL_PL, DE_DE }, THEMES } = CONSTANTS

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

  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.lang);
  const { count, step } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const actionCreators = bindActionCreators({ increment, decrement, setLang, setStep }, dispatch); // отримуєм пов'язані з dispatch actioncreators (не потрібно ОГОРТАТИ DASPATCH ВРУЧНУ!!!)

  const translation = translations.get(language) // отримуємо об'єкт з перекладом
  const { counText, stepText, incrementText, decrementText } = translation;

  console.log(props);

  const className = classNames({
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT
  })

  return (
    <div className={className}>
      <select value={language} onChange={({ target: { value } }) => actionCreators.setLang(value)}>
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
          onChange={({ target: { value } }) => actionCreators.setStep(value)} />
      </label>
      <button onClick={() => actionCreators.increment()}>{incrementText}</button>
      <button onClick={() => actionCreators.decrement()}>{decrementText}</button>
    </div>
  );
}


export default Counter;

