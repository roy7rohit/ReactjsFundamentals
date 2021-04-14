import React from 'react';

// const Greet = ({name, heroName, children}) =>{
  const Greet = (props) =>{
    const {name, heroName, children} = props
  // console.log(props)
  return (
    <div>
      <h1> Hello {name} A.K.A. {heroName} </h1>
      {children}
    </div>
  
  )
}

export default Greet;