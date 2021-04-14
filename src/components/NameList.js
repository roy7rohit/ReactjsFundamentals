import React from 'react'
import Person from './Person'
import './myStyles.css'

function NameList(props){

  // const names = ['roy', 'priyu', 'love']
  // const nameList = names.map(name => <h3>{name}</h3>)

  const className = props.primary ? 'primary ' : ''

  const persons = [
    {
    id: 1,
    name: 'Roy',
    age: 22,
    skill: 'React'
    },{
      id: 2,
      name:'Priyu',
      age: 21,
      skill: 'Vue'
    }
  ]

  const names = ['roy', 'priyu', 'love']

  const nameList = names.map((name, index) => <h2 key={index} > {index}: {name}</h2>)

  // const personList = persons.map(person => <Person key={person.id} person={person} />)
  return(
    <div className={`${className} font-xl`}>
      {nameList}
    </div>

    // <div>
    //   {/* <h2>{names[0]}</h2>
    //   <h2>{names[1]}</h2>
    //   <h2>{names[2]}</h2> */}
    //   {/* {


    //   names.map(name => (
    //     <h1><i>{name}</i></h1>
    //   ))
    //   } */}


    //   {nameList}


    // </div>
  )
}

export default NameList