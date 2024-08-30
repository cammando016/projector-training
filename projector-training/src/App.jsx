import { useState } from 'react'
import React from 'react';
import './App.css'
import Error from './components/Error'

function App () {
  const errors = [
      {
        errorId: 1,
        errorDesc: 'The sound channel is on nonsync instead of dcinema',
        errorSol: 'Press dcinema/channel 1 on the sound rack or run audio dcinema macro',
        errorImgSrc: 'https://imgur.com/LPvTGOU.jpg',
        errorImgAlt: 'Sound rack set to non-sync channel'
      },
      {
        errorId: 2,
        errorDesc: 'Volume is very quiet',
        errorSol: 'Use the volume dial on the sound rack, or run Fader 4.0 macro',
        errorImgSrc: 'https://imgur.com/Cso4xrA.jpg',
        errorImgAlt: 'Volume set very low'
      },
      {
        errorId: 3,
        errorDesc: 'Error 3',
        errorSol: 'Fix Error 3',
        errorImgSrc: '#',
        errorImgAlt: 'Error 3'
      }
  ];

  const [currentErrorIndex, setCurrentErrorIndex] = useState(0);

  const incrementError = () => {
    setCurrentErrorIndex((prevIndex) => Math.min(prevIndex + 1, errors.length - 1));
  }

  const decrementError = () => {
    setCurrentErrorIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  return (
    <>
      <Error
        error={errors[currentErrorIndex]}
        array={errors}
        errorNum = {currentErrorIndex+1}
        incrementError={incrementError}
        decrementError={decrementError}
      />
    </>
  );
} 

export default App;