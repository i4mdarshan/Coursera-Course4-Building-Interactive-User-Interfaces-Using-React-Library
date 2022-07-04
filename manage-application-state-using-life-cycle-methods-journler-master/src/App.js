import './App.css';
import React from 'react';
import BrandCard from './components/BrandCard';
import JournelCard from './components/JournelCard';
import MoodStatsCard from './components/MoodStatsCard';
import FormCard from './components/FormCard';
import axios from 'axios';

class App extends React.Component{

    /*Add code in the constructor to initialize the following states:
    JournalId, date, journalDate, mood, title, writeup, journalMode and journalCollection*/
    constructor(props){
        super(props);
        const currentDate = new Date();
        const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"]
        const currentDateAsNumber = currentDate.getDate();
        const month = months[currentDate.getMonth()];
        const year = currentDate.getFullYear();
        this.todaysDate = `${currentDateAsNumber} ${month} ${year}`;

        this.getJournel();
    }

    getJournel() {
        let response =  axios.get("http://localhost:3000/journals");
        return response;
    }
    // Define event handlers for each input elements

    // Define callback function for adding a new journal entry

    // Define callback function for cancel operation

    // Define callback function for edit operation

    // Define callback function for delete operation

    // Define callback function to enable editing/deleting on selecting a particular journal entry

    // Define a function to get the count of particular mood to be passed as props to MoodStats component

    // Define the render method which returns a React element that contains all the individual components 
    render(){
        return (
            <>
                <div className="container-fluid mx-0 px-0 overflow-hidden">
                    <div className="row">
                        <div className="col-md-3">
                            <BrandCard/>
                        </div>
                        <div className="col-md-4">
                            <MoodStatsCard/>
                            <JournelCard/>
                        </div>
                        <div className="col-md-5">
                            <h4 className="text-dark mt-2 mb-3">
                                {this.todaysDate}
                            </h4>
                            <FormCard/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default App;
