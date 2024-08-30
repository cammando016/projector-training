import React from 'react';
import Button from './Button';

function ErrorNav ({ array, incrementError, decrementError, errorNum }) {
    const errorCount = array.length;
    let errorNavDiv;

    switch (errorNum) {
        case 1: {
            errorNavDiv = (
                <div>
                    <Button func={incrementError} text='Next Error'></Button>
                </div>
            );
            break;
        }
        case errorCount: {
            errorNavDiv = (
                <div>
                    <Button func={decrementError} text='Previous Error'></Button>
                </div>
            );
            break;
        }
        default: {
            errorNavDiv = (
                <div>
                    <Button func={decrementError} text='Previous Error'></Button>
                    <Button func={incrementError} text='Next Error'></Button>
                </div>
            );
            break;
        }
    }

    return (
        <>
            {errorNavDiv}
            <p>Errors: {errorCount}. Error Num: {errorNum}</p>
        </>
    );
}

export default ErrorNav;