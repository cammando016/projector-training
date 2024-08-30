import React from 'react';

function Button ({ func, text }) {
    return (<div className='reveal-button'><button onClick={func}>{text}</button></div>)
}

export default Button;

// function testing () {
//     const [hideError, setHideError] = useState(true);
//     function hideSection () {
//       setHide(!hide);
//     }
    
//     return (
//       <div id={id} className='resume-section'>
//         <div className='section-heading'>
//           <h2 className='section-title'>{title}</h2>
//           <button onClick={hideSection}>{hide ? 'Show' : 'Hide'}</button>
//         </div>
//         {!hide && <div className='section-data'>{children}</div>}
//       </div>
//     );
// }