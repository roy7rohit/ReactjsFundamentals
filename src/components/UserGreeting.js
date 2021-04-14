import React, { Component } from 'react'

class UserGreeting extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true,
    }
  }
  
  render(){

    // Approach : 1 => short circuit--------------------------------------------------------------

    return this.state.isLoggedIn && <div>Welcome Roy</div>

    // Approach : 2 => conditional ternary operator----------------------------------------------

    // return (
    //   this.state.isLoggedIn ? (
    //   <div> Welocome User</div> ) : ( 
    //   <div> Welcome Guest</div> )
    // )

    // Approach : 3 => if else with a JS variable-------------------------------------------------

    // let message
    // if(this.state.isLoggedIn){
    //   message = <div> Welcome User</div> 
    // }else{
    //   message = <div> Welcome Guest</div>
    // }

    // return <div>{message}</div>
    
    // Approach : 4 => normal if-else-------------------------------------------------------------

    // if(this.state.isLoggedIn){
    //   return(
    //     <div>
    //       Welocome user
    //     </div>
    //   )
    // }else{
    //   return(
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }


    // return(
    //   <div>

    //   </div>
    // )
  }
}

export default UserGreeting
