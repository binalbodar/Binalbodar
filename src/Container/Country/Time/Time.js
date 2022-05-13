import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            //1. Constructor set initial value.
            time:new Date()
        }
    }

    tick=()=>{
        this.setState({
            time:new Date
        })
    }

    componentDidMount=()=>{
        //3. Use this method for requst data to server.
        this.timeId = setInterval(()=> this.tick(),1000);
    }

    componentDidUpdate=(prevProps,prevState)=>{
        //4. Call componentDidUpdate when previos state and current state is not same.
        if(prevState.time!==this.state.time){
            console.log("componentDidUpdate Called");
        }
    }

    componentWillUnmount=()=>{
        //5. ComponentWillUnmount used to realse resourse from component.
        clearInterval(this.timeId);
    }
    
    render() {
        //2. Call render method each time when state value change.
        return (
            <div>
                {
                    this.state.time.toLocaleTimeString()
                }
            </div>
        );
    }
}

export default Time;