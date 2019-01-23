import React from 'react'

import '../../caculator.css'
const Button = (props) =>{
    return(
       <input type='button' value={props.symbol} onClick={props.click}  className={`button ${props.type}`}/>
    )
}



export default Button;