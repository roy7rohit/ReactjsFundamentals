import React from 'react'

function ChildComponent(props){
  return(
    <div>
      <button onClick={() => props.greetHandler('priyanshi')}>Magic</button>
    </div>
  )
}

export default ChildComponent