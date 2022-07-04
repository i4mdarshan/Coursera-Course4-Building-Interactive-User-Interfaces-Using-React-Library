# Manage application state using life cycle methods - Pomodoro

## Context

Pomodoro app had been broken down into components like Timer component and ButtonGroup component to achieve abstraction in the previous exercise.​

These components could not support certain functionalities like pausing and stopping timers as they did not use any life cycle methods.​

Now, you are expected to modify the Pomodoro app created in the previous exercise by implementing the life cycle methods which makes it to function as expected.

## Problem statement

Modify the Pomodoro app created by breaking into UI components in the previous exercise by implementing appropriate life cycle methods in order to achieve the expected functionality as listed in the user stories.

### User Stories
1. As a User I should be able to start a Pomodoro with default time of 25 Minutes
2. As a User I should be able to see the Current Time Left in Pomodoro Timer.
3. As a User I should be able to stop a ***running*** Pomodoro Timer. Stopping the Pomodoro ***pauses*** the timer. 
4. As a User I should be able to end a ***running*** Pomodoro to its early completion.
5. As a User I should be navigated to the Short Break after every Successful or Early Pomodoro Interval Completion.
6.  As a User I should see the message *Time to Work!* while the Pomodoro Interval tab is active.
7. As a User I should be able to directly navigate to the Short Break Timer.
8. As a User I should be able to start a Short Break Timer with a default time of 5 Minutes.
9. As a User I should be able to see the Current Time Left in Short Break Timer.
10. As a User I should be able to stop a ***running*** Short Break Timer. Stopping the Short Break Timer ***pauses*** the timer. 
11. As a User I should be able to end a ***running*** Short Break Timer to its early completion.
12. As a User I should see the message *Time for Break!* while the Short Break Tab is active.

### Instructions

1. Download and unzip the boilerplate code. 
2. Run the command `npm install` to install the dependencies. 
3. Open the boilerplate code in VSCode to develop the assignment solution. 
4. Edit App, ButtonGroup and Timer component by adding life cycle methods to fulfill the stated requirements.	  
6. Ensure that no memory leaks happen when components are removed from the DOM.   
7. Run the test scripts available under `src/test` by giving the `npm run test` command in the terminal to test locally. 
8. Refactor the solution to ensure all test cases are passing. 
9. Zip the solution code with the name same as the assignment name.  
10. Upload the zipped solution for submission.