import React, { Component } from 'react'
import Row from './Row'

export default class BtnContainer extends Component {
  state ={
    preVal: '',
    input: '0',
    display: [],
    currentVal: '',
    operation: '',
    result: null
  }

  onBtnClick = (e) =>{
    let input = e.target.value;
    if(!Number.isNaN(+input) || input === '.'){
     if(this.state.input === '0' || this.state.input === this.state.result){
       this.setState({input,result: '0'})
     }
     else{
      this.setState(priv => ({input: priv.input + input}));
     }
    }
    else{
      if(input === 'C'){
        this.setState({input: '0',preVal: '', currentVal: '',operation: ''})
      }
      else if(input !== '=' && input !== 'C' ){
        this.setState({operation: input, preVal: this.state.input,input: '0'});
      }
      else if(input == '='){
        let result = null
        if(this.state.operation === '+'){
          if(this.state.result !== ''){
            result = (+this.state.preVal) + (+this.state.input)
            this.setState({result, preVal:result, operation:'',input: result})
          }
          else{
            result = (+this.state.result) + (+this.state.input);
            this.setState({result,preVal:result, operation:'',input:'0'});
          }
         
        }

        if(this.state.operation === 'X'){
          if(this.state.result !== ''){
            result = (+this.state.preVal) * (+this.state.input)
            this.setState({result, preVal:result, operation:'',input: result})
          }
          else{
            result = (+this.state.result) * (+this.state.input);
            this.setState({result,preVal:result, operation:'',input:'0'});
          }
        }

        if(this.state.operation === '-'){
          if(this.state.result !== ''){
            result = (+this.state.preVal) - (+this.state.input)
            this.setState({result, preVal:result, operation:'',input: result})
          }
          else{
            result = (+this.state.result) - (+this.state.input);
            this.setState({result,preVal:result, operation:'',input:'0'});
          }
        }
        if(this.state.operation === '/'){
          if(this.state.result !== ''){
            result = (+this.state.preVal) / (+this.state.input)
            this.setState({result, preVal:result, operation:'',input: result})
          }
          else{
            result = (+this.state.result) / (+this.state.input);
            this.setState({result,preVal:result, operation:'',input:'0'});
          }        }

        if(this.state.operation === '%'){
          if(this.state.result !== ''){
            result = (+this.state.preVal) % (+this.state.input)
            this.setState({result, preVal:result, operation:'',input: result})
          }
          else{
            result = (+this.state.result) % (+this.state.input);
            this.setState({result,preVal:result, operation:'',input:'0'});
          }
        }
        
      }
      
    }
  }
  render() {
    const row1 = ['C', '≠', '%', '/' ];
    const row2 = ['7','8','9','X'];
    const row3 = ['4','5','6','-'];
    const row4 = ['1', '2', '3', '+'];
    const row5 = ['.', '0','<','='];
    return (
      <div className="calc-body">
        <div className="calc-screen">
            <div className="calc-operation">{`${this.state.preVal} ${this.state.operation}`}</div>
            <div className="calc-typed">{this.state.input}<span className="blink-me">_</span></div>
        </div>
        <Row symbols={row1} btnClick = {this.onBtnClick} />
        <Row symbols={row2} btnClick = {this.onBtnClick} />
        <Row symbols={row3} btnClick = {this.onBtnClick} />
        <Row symbols={row4} btnClick = {this.onBtnClick}/>
        <Row symbols={row5} btnClick = {this.onBtnClick} />
      </div>
    )
  }
}
