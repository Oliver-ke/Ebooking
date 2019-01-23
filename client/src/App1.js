import React, { Component } from 'react';
import './App.css'
import {Transition, animated } from 'react-spring'
import Component1 from './Components/spring-demo/Component-1'
import Component2 from './Components/spring-demo/Component2'
import Component3 from './Components/spring-demo/Component3'


class App extends Component {

  state={
    showComponent3: false
  }
  toggle = () =>{
    this.setState(priv =>(
      {showComponent3: !priv.showComponent3}
    ))
    console.log('fireing call')
  }
  componentDidMount(){
   setInterval((this.toggle),3000)
  }
  render() {
    return (
     
      <div>
        
        <div> 
         <Component1 />
         <Component2 toggle={this.toggle} />
         {/* {this.state.showComponent3 && <Component3 />} */}
         <Transition
          native
          items={this.state.showComponent3}
          from={{opacity: 0}}
          enter={{opacity: 1}}
          leave={{opacity: 0}}
         >
          {show => show && (props =>(
            <animated.div style={props}>
              <Component3 />
            </animated.div>
          ))}
         </Transition>
        </div>
      </div>
    );
  }
}

export default App;
