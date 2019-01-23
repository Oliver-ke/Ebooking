import React from 'react'
import Button from './Button'
class Row extends React.Component{
    render(){
        const symbols = this.props.symbols;
        return(
            <div className='calc-button-row'>
                {symbols.map((symbol, index) =>{
                    if(symbol === 'X' || symbol === '-' || symbol === '/' || symbol === '≠'
                    || symbol === '+' || symbol === '=' || symbol == '%' || symbol === 'C'){
                       if(symbol === 'C'){
                        return(
                            <Button type={'c'} key={index} symbol={symbol} click={this.props.btnClick}/>
                        )
                       }
                       else{
                        return(
                            <Button type={'l'} key={index} click={this.props.btnClick} symbol={symbol} />
                        )
                       }
                    }
                    else{
                        return(
                            <Button type={' '} key={index} click={this.props.btnClick} symbol={symbol} />
                        )
                    }
                })}
            </div>
        )
    }
}

export default Row;