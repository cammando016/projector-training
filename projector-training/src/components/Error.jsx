import React from 'react';
import { useState } from 'react';
import Button from './Button';
import ErrorNav from './ErrorNav';

function Error ({ error, array, errorNum, incrementError, decrementError }) {
    const [hideError, setHideError] = useState(true);
    const [hideSolution, setHideSolution] = useState(true);

    function showError () {
        setHideError(!hideError);
    }

    function showSolution () {
        setHideSolution(!hideSolution);
    }

    return (
        <>
            <div id={`err-${error.errorId}`}>
                <h3>Error {error.errorId} Identification</h3>
                <div><img alt={error.errorImgAlt} src={error.errorImgSrc}></img></div>
                <input id='error-input' type='text' placeholder='Describe what you think the error is'></input>
                <Button func={showError} text='Reveal Error'/>

                {!hideError && (
                    <div id={`err-ident-answer-${error.errorId}`}>
                        <p>{error.errorDesc}</p>

                        <div id={`err-resolution-${error.errorId}`}>
                            <h3>Error {error.errorId} Resolution</h3>
                            <input id='solution-input' type='text' placeholder='Explain what you believe the solution to this error is'></input>
                            <Button func={showSolution} text='Reveal Solution'/>

                            {!hideSolution && (
                                <>
                                    <p>{error.errorSol}</p>
                                    <ErrorNav errorNum={errorNum} array={array} incrementError={incrementError} decrementError={decrementError} />
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Error;