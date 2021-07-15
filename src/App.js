import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics '
import Notification from './components/Notification/Notification'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions '

function App() {

    const [Good, setGood] = useState({
        Good: 0,
        Neutral: 0,
        Bad: 0
    });

    // const [Neutral, setNeutral] = useState(0);
    // const [Bad, setBad] = useState(0);

    const state =

    {
        Good: 0,
        Neutral: 0,
        Bad: 0
    }
        ;

    const onLeaveFeedback = (evt) => {

        console.log(evt.target.innerHTML);

        setGood(prevState => {
            return {
                [Good.evt.target.innerHTML]: prevState[evt.target.innerHTML] + 1
            }
        })

    }

    // countTotalFeedback = () => {
    //     let total = this.state.Neutral + this.state.Bad + this.state.Good;
    //     return total;
    // };
    // countPositiveFeedbackPercentage = () => {

    //     let TotalFeedBack = this.state.Neutral + this.state.Bad + this.state.Good;
    //     let PosFeedBack = Math.floor(this.state.Good / TotalFeedBack * 100) + "%";
    //     return PosFeedBack;
    // };


    const stateArr = Object.keys(state);

    console.log(Good);
    return (
        <>
            <h2>Please leave feedback</h2>
            <>
                <FeedbackOptions
                    propspArr={stateArr}
                    onLeaveFeedback={onLeaveFeedback}
                />
            </>

            <h2>Statistics</h2>
        </>



    );

}

export default App;