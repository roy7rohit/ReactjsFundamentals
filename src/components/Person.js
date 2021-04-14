import React from 'react'

function Person({person}){
  return(
    <div>
      <h1>
        I am key={person.id} {person.name}. I am {person.age} old. I know {person.skill}.
      </h1>
    </div>
  )
}

export default Person