import React from 'react'

const App = () => {

  /* define the constructor and initialize the following:
       1. define timer states with values 'Running', 'Stopped' and 'Ended'
       2. define timers object with object properties: pomodoro and shortBreak, where each property 
       object should have properties: type, timeout, timerState, timeLeft, timeLeftDisplay and message
       3. set the 'currentTimer' state value to pomodoro that has been defined in 2nd step 
    */
    // define startTimer() function to start timer and update the currentTimer state
    
    // define endTimer() function to end current timer and navigate to next timer
    
    // define navigateToTimer() function to update currentTimer state with given timer

    // define navigateToNextTimer() function to update currentTimer with next timer state
    
    // define stopTimer() function to pause the current timer and update the currentTimer state

    // define the callback method to change the state of the timeLeft with new value after every second

    // define render method which returns a React element that contains ButtonGroup and Timer component


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
