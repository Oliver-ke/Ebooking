import React, { Component } from 'react';
import './caculator.css'
import BtnContainer from './Components/Calculator/BtnContainer'

class App extends Component {
    render(){
        return(
            <div className='container'>
                <BtnContainer />
            </div>
        )
    }
}

export default App;
