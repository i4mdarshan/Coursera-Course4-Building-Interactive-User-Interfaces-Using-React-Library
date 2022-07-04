// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
import React from 'react'
import ReactDOM from 'react-dom'

//Write the code for creating App class component

const App = () => {

    /* define the constructor and initialize the following:
       1. define timer states with values 'Running', 'Stopped' and 'Ended'
       2. define timers object with object properties: pomodoro and shortBreak, where each property 
       object should have properties: type, timeout, timerState, timeLeft, timeLeftDisplay and message
       3. set the 'currentTimer' state value to pomodoro that has been defined in 2nd step 
    */

    // constructor(props){

        // super(props);
        // this.timers = {
        //     pomodro:{
        //         type:'',
        //         timeout:'',
        //         timerState:'',
        //         timeLeft:'',
        //         timeLeftDisplay:'',
        //         message:''
        //     },
        //     shortbreak:{
        //         type:'',
        //         timeout:'',
        //         timerState:'',
        //         timeLeft:'',
        //         timeLeftDisplay:'',
        //         message:''
        //     },
        // }

        // this.state = {
        //     timer:'',
        //     currentTimer:this.timers.pomodro
        // };
    // }
    // define startTimer() function to start timer and update currentTimer state
    // startTimer = () =>{

    // }
    
    // define endTimer() function to end current timer and navigate to next timer
    // endTimer = () => {

    // }
    
    // define navigateToTimer() function to update currentTimer state with given timer
    // navigateToTimer = () =>{

    // }

    // define navigateToNextTimer() function to update currentTimer with next timer state
    // navigateToNextTimer = () =>{

    // }
    
    // define stopTimer() function to pause the current timer and update the currentTimer state
    // stopTimer = () =>{

    // }

  return (
    <div>
        <h2>Pomodoro</h2>
        <h2>Pomodoro</h2>
        <p>Short Break</p>
        <p>25:00</p>
        <p>05:00</p>
        <p>start</p>
        <p>stop</p>
        <p>end</p>
        <p>Time to Work!</p>
        <p>Time for Break!</p>
    </div>
  )
}

export default App

// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
// module.exports={App};
