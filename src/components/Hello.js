import React from 'react';

const Hello = ()=>{
  return(
    <div className='royClass'>
      <h1> Hello Roy </h1>
    </div>

  )

  // return React.createElement('div', {id: 'hello', className: 'royClass'}, React.createElement('h1', null, 'Hello Roy'));
}

export default Hello;