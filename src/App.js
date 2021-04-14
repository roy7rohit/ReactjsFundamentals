import React from 'react'
import './App.css';
// import Hello from './components/Hello' ;
import Greet from './components/Greet';  
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassCick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Inline from './components/Inline';
import './newStyles.css';
import styles from './newStyles.module.css';


const App = ()=>{
  return(
    <div className='App'>
      {/* <Hello /> */}

      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Greet name='Bruce' heroName='Bat Man'> 
        <button>Bat-Man</button>
      </Greet>
      <Greet name='Clark' heroName='Super Man'>
        <button>Super-Man</button>
      </Greet>
      <Greet name='Diana'heroName='Wonder Women'>
        <button>Wonder-Women</button>
      </Greet> */}

      {/* <Welcome name='Bruce' heroName='Bat Man'> 
        <button>Bat-Man</button>
      </Welcome>
      <Welcome name='Clark' heroName='Super Man'>
        <button>Super-Man</button>
      </Welcome>
      <Welcome name='Diana'heroName='Wonder Women'>
        <button>Wonder-Women</button>
      </Welcome>  */}

      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <UserGreeting /> */}

      {/* <NameList  primary={true}/> */}

      {/* <Inline /> */}




    </div>
    )
}



export default App;
