# Break UI Into A Component Hierarchy - Pomodoro

## Context

As the craft of Web design continues to evolve, recognizing the need to develop thoughtful design systems rather than creating simple collections of web pages is very essential. Software designers are more interested in what interfaces are comprised of and how to construct design systems in a more methodical way.​

Designers can relate the interface with the atomic design where all matter is comprised of atoms. The atomic units bond together to form molecules, which in turn combine into more complex organisms to ultimately create all the matter in the universe. ​

Analogous to atomic design, Component-based design is used to split UI into smaller and manageable parts with clear names.​

Pomodoro app created in the previous exercise needs to be developed by decomposing the page using the Component-based design approach.​

## Problem statement

Use the component-based design approach to decompose the pomodoro app created in the previous practice exercise and try to achieve the same functionality.​ **You may not be able to achieve the desired functionality when you decompose.** But try to attempt it since it will be resolved after completing the next sprint. Following are the user stories to be developed.  Refer to the [Pomodoro Mockup](Pomodoro.pdf) for functional and UI requirements.

Following are the user stories to be developed. 

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
2. Open the boilerplate code in VSCode to develop the assignment solution. 
3. Create the application using `create-react-app` tool. 
4. The Pomodoro app must be designed using React Class Components.
5. Use separate file for each component identified and place them inside the `src` folder 
6. Zip the solution code with the name same as assignment name. 
7. Upload the zipped solution for submission. 