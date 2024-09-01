import { useState } from 'react'
import React from 'react';
import './App.css'
import Error from './components/Error'

function App () {
  //Error data for each question
  const errors = [
      {
        errorId: 1,
        errorDesc: 'The sound channel is on nonsync instead of dcinema/digital 1',
        errorSol: 'Press dcinema/channel 1 on the sound rack or run "audio dcinema" macro',
        errorImgSrc: 'https://imgur.com/LPvTGOU.jpg',
        errorImgAlt: 'Audio error'
      },
      {
        errorId: 2,
        errorDesc: 'Volume is very quiet',
        errorSol: 'Use the volume dial on the sound rack, or run "Fader 4.0" macro',
        errorImgSrc: 'https://imgur.com/Cso4xrA.jpg',
        errorImgAlt: 'Audio error'
      },
      {
        errorId: 3,
        errorDesc: 'Xenon is off',
        errorSol: 'Turn on xenon using the controls on the side of the projector, or by running the "xenon on" macro',
        errorImgSrc: 'https://imgur.com/956uLyF.jpg',
        errorImgAlt: 'No picture error'
      },
      {
        errorId: 4,
        errorDesc: 'Dowser is closed',
        errorSol: 'Open dowser using controls on the side of the projector, or by running the "Dowser Open" macro',
        errorImgSrc: 'https://imgur.com/956uLyF.jpg',
        errorImgAlt: 'No picture error'
      },
      {
        errorId: 5,
        errorDesc: 'Flat ratio content, projector channel is correct but the masking is in scope',
        errorSol: 'Change the masking using the buttons next to the port glass or running the "Masking Flat" macro',
        errorImgSrc: 'https://imgur.com/BVHG0ql.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 6,
        errorDesc: 'Flat ratio content, both masking and projector channel are set to scope',
        errorSol: 'Use "2D Flat" macro on projector to change both masking and projector channel at once. Otherwise you can individually change both using the projector controls and masking buttons next to port class.',
        errorImgSrc: 'https://imgur.com/ow2TiRJ.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 7,
        errorDesc: 'Trick question - no errors here! Flat content displaying as expected.',
        errorSol: 'No correction needed',
        errorImgSrc: 'https://imgur.com/74kHxbO.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 8,
        errorDesc: 'Flat ratio content, masking is correct but projector channel is in scope.',
        errorSol: 'Change the projector channel using the projector side controls, or run the "2D Flat" macro.',
        errorImgSrc: 'https://imgur.com/h7DzUzh.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 9,
        errorDesc: 'Scope content, projector channel is correct but masking is in flat',
        errorSol: 'Use the masking buttons next to the port glass or run the "Masking Scope" macro.',
        errorImgSrc: 'https://imgur.com/Z2rdarR.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 10,
        errorDesc: 'Trick question - no errors here! Scope content displaying as expected.',
        errorSol: 'No correction needed',
        errorImgSrc: 'https://imgur.com/mbtOT2A.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 11,
        errorDesc: 'Scope content, both projector channel and masking are in flat',
        errorSol: 'Use "2D Scope" macro on projector to change both masking and projector channel at once. Otherwise you can individually change both using the projector controls and masking buttons next to port class.',
        errorImgSrc: 'https://imgur.com/iFsbHKX.jpg',
        errorImgAlt: 'Masking visual error'
      },
      {
        errorId: 12,
        errorDesc: 'Scope content, masking is correct but projector channel is in flat',
        errorSol: 'Change the projector channel with controls on the side of the projector or run "2D Scope" macro',
        errorImgSrc: 'https://imgur.com/Tvfj9h3.jpg',
        errorImgAlt: 'Masking visual error'
      }
  ];

  //Storage for user answers
  const [answers, setAnswers] = useState( errors.map(() => (
    { 
      errorAnswer: '', 
      errorSolution: '' 
    })) 
  );

  //Track the current error user is up to
  const [currentErrorIndex, setCurrentErrorIndex] = useState(0);

  const incrementError = () => {
    //Update answers array with the values typed into input fields
    const updatedAnswers = [...answers];
    updatedAnswers[currentErrorIndex].errorAnswer = document.querySelector('#error-input').value;
    updatedAnswers[currentErrorIndex].errorSolution = document.querySelector('#solution-input').value;
    setAnswers(updatedAnswers);
    
    //Clear input fields
    document.querySelector('#error-input').value = '';
    document.querySelector('#solution-input').value = '';

    //Increment error count
    setCurrentErrorIndex((prevIndex) => Math.min(prevIndex + 1, errors.length - 1));
  };

  //Saves answers to "answers" array and renders previous error on screen
  const decrementError = () => {
    //Update answers array with values typed into input fields
    const updatedAnswers = [...answers];
    updatedAnswers[currentErrorIndex].errorAnswer = document.querySelector('#error-input').value;
    updatedAnswers[currentErrorIndex].errorSolution = document.querySelector('#solution-input').value;
    setAnswers(updatedAnswers);

    //Clear input fields
    document.querySelector('#error-input').value = '';
    document.querySelector('#solution-input').value = '';

    //Decrement error count
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