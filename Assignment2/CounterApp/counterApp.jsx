import React from 'react'
import ReactDOM from 'react-dom'
export default class App1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            val:0
        }
        this.incrementVal=this.incrementVal.bind(this);
        this.decrementVal=this.decrementVal.bind(this);   
    }
    incrementVal(){
        this.setState((state,props)=>({
            val:state.val+1
        }));
    }
    decrementVal(){
        this.setState((state,props)=>({
            val:state.val-1
        }));
    }
    render(){
        return(<div>
            <h1>hi this is Component</h1>
            <Comp1 val={this.state.val} incrementVal={this.incrementVal} decrementVal={this.decrementVal}/>
            <Comp2 val={this.state.val} incrementVal={this.incrementVal} decrementVal={this.decrementVal}/>
            <Comp3 val={this.state.val} incrementVal={this.incrementVal} decrementVal={this.decrementVal}/>
        </div>);
    }
}

const Comp1= (props)=>(<div>
            <h1>{props.val}</h1>
            <button onClick={props.incrementVal}>Increment</button>
            <button onClick={props.decrementVal}>Decrement</button>
        </div>);
        




const Comp2=(props)=>(<div>
            <h1>{props.val}</h1>
            <button onClick={props.incrementVal}>Increment</button>
            <button onClick={props.decrementVal}>Decrement</button>
        </div>);


const Comp3=(props)=>(<div>
            <h1>{props.val}</h1>
            <button onClick={props.incrementVal}>Increment</button>
            <button onClick={props.decrementVal}>Decrement</button>
        </div>);