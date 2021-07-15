import React, { useState } from 'react';
import Statistics from './components/Statistics/Statistics '
import Notification from './components/Notification/Notification'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions '

function App() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = (evt) => {

        if (evt.target.innerHTML === "Good") {
             setGood(state=> state +1);
        }
        if (evt.target.innerHTML === "Neutral") {
             setNeutral(state=> state +1);
         }
        if (evt.target.innerHTML === "Bad") {
             setBad(state=> state +1);
         }
    }

    function countTotalFeedback () {
        let total = neutral + bad + good;
        return total;
    };
    function countPositiveFeedbackPercentage (){

        let TotalFeedBack = neutral + bad + good;
        let PosFeedBack = Math.floor(good / TotalFeedBack * 100) + "%";
        return PosFeedBack;
    };


    const stateArr = ['Good', 'Neutral', 'Bad'];

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
                {countTotalFeedback() === 0 ? <Notification message="No feedback given" /> :
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />}
            </>

    );

}

export default App;