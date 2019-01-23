import React from 'react'
import {Spring} from 'react-spring';

 const  Component1 = () =>{
  return (
    <Spring
    from={{opacity: 0, marginTop: -500}}
    to={{opacity: 1, marginTop: 0}}
  >
      {props =>(
          <div style={props}>
            <div style={c1Style}>
                <h1>Component 1 </h1>
                <p> 
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                </p>
                <Spring
                    from={{number: 0}}
                    to={{number: 10}}
                    config={{duration: 10000}}
                >
                    {props =>{
                        return(
                            <div>
                                <h1 style={counter}>{props.number.toFixed()}</h1>
                            </div>
                        )
                    }}
                </Spring>
             </div>
          </div>
      )}
  </Spring>
  )
}

export default Component1;

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}
const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}