import React from 'react';
import SolButton from './SolButton';

function Error ({ array }) {
    return (
        <>
            <div id={`err-${array.errorId}`}>
                <h3>Error {array.errorId} Identification</h3>
                <input type='text' placeholder='Describe what you think the error is'></input>
                <SolButton />
                <div id='err-ident-answer-1'>
                    <p>{array.errorDesc}</p>
                    <div id='err-resolution-1'>
                        <h3>Error {array.errorId} Resolution</h3>
                        <input type='text' placeholder='Explain what you believe the solution to this error is'></input>
                        <SolButton />
                        <p>{array.errorSol}</p>
                    </div>
                </div>
            </div>
            <img alt='Error 1 Image' src={array.errorImgSrc}></img>
        </>
    )
}

export default Error;