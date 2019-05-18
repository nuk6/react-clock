import React from 'react';
require('./Clock.css');
class Clock extends React.Component{
    state = {
        hour : 20,
        minute : 30, 
        second : 89
    }
    componentDidMount(){
        setInterval(() => {this.setClock()},1000);
    }
    setClock = () => {
        var now = new Date();
        var second = now.getSeconds()/60*360;
        var minute = (now.getMinutes()+second)/60;
        var hour = (now.getHours()+minute)/12;    
        this.setState(() => { return {hour,minute,second}});
    }
    getStyle = () => {
        console.log(this.state.hour);
        console.log(this.state.minute);
        return ({ transform :  ['rotate('+this.state.second+'deg)']});
    }
    render(){
        return(
        <div id='clockBackground'>
           <div id='clockWrapper'>
           <div id='theClock'>
                <div className='hand' id='hourHand'></div>
                <div className='hand' id='minuteHand'></div>
                <div style={{transform: `rotate(${this.state.second}deg)`}} className='hand' id='secondHand'></div>
                <div className='hand' id='dot'></div>
                <div className='time' id='time1'>1</div>
                <div className='time' id='time2'>2</div>
                <div className='time' id='time3'>3</div>
                <div className='time' id='time4'>4</div>
                <div className='time' id='time5'>5</div>
                <div className='time' id='time6'>6</div>
                <div className='time' id='time7'>7</div>
                <div className='time' id='time8'>8</div>
                <div className='time' id='time9'>9</div>
                <div className='time' id='time10'>10</div>
                <div className='time' id='time11'>11</div>
                <div className='time' id='time12'>12</div>
           </div>
           </div>
        </div>
            );
    }
}
export default Clock;