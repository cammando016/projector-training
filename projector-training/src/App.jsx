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
        errorImgSrc: 'https://imgur.com/LPvTGOU.jpg'
      },
      {
        errorId: 2,
        errorDesc: 'Volume is very quiet',
        errorSol: 'Use the volume dial on the sound rack, or run Fader 4.0 macro',
        errorImgSrc: 'https://imgur.com/Cso4xrA.jpg'
      }
  ];
  
  const errorDivList = errors.map(error => <Error array={error} /> );

  return (
    <>
      <div>{errorDivList[0]}</div>
      <div>{errorDivList[1]}</div>
    </>
  )
} 

export default App;