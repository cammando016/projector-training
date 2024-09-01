import React from 'react';

function Button ({ func, text }) {
    return (<div className='button'><button onClick={func}>{text}</button></div>)
}

export default Button;