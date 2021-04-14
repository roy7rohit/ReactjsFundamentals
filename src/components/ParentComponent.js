import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       greet: 'Love',
    }

    this.greetLove = this.greetLove.bind(this)
  }

  greetLove(loveName){
    alert(`Hello ${this.state.greet} from ${loveName}`)
  }
  
  render(){
    return(
      <div>
        <ChildComponent greetHandler={this.greetLove} />
      </div>
    )
  }
}

export default ParentComponent