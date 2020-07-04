import React, { Component } from 'react'

export default class CounterClass extends Component {
    //set constructor
    constructor(){
        super()
        this.state={count: 0}
      }

      incrementNum= () => {
        this.setState({
          count:this.state.count +1
        })
      }

      decrementNum= () => {
        if(this.state.count< 1){
          
            alert('Angka Tidak Boleh Negatif!')
          
        }else {
          this.setState({
            count: this.state.count-1
          });
        }
      };

      resetNum=() => {
        this.setState({
            count:0
        })
      }


    render() {
        const {count} = this.state
      
        return (
            <div>
                <h1>Count Class</h1>
                <h1>Count : {count}</h1>
            
                <button onClick={this.incrementNum}> + </button> <button  onClick={this.decrementNum}> - </button  > <button onClick={this.resetNum}>Reset</button>
            
         
          
            </div>
        )
    }
}
