import { useState, useEffect } from 'react';
import './App.css'

import Description from './Description/Description'
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';


const App = () => {
    // We initialize the state using a function that receives initial values from localStorage
    const [feedbackTypes, setFeedbackTypes] = useState(() => {
        const storedFeedback = JSON.parse(localStorage.getItem('feedbackTypes'));
        return storedFeedback || { good: 0, neutral: 0, bad: 0 };
    });

    // A function to update the status depending on the type of feedback
    const updateFeedback = feedbackType => {
        setFeedbackTypes(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    // A function to reset collected feedback
    const resetFeedback = () => {
        setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
    };

    // We save the state in local storage when changing
    useEffect(() => {
        localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
    }, [feedbackTypes]);

    // Calculation of the total number of reviews
    const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

    // Calculation of the (%) of positive reviews
    const positivePercentage = Math.round((feedbackTypes.good / totalFeedback) * 100) || 0;

    return (
      <div>
        <Description />
        {/* We pass the updateFeedback and resetFeedback functions as props to the Options component */}
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback}
            />
            {/* Conditional rendering to display a Feedback component or a message */}
            {totalFeedback > 0 ? (
                <Feedback
                    feedbackTypes={feedbackTypes}
                    totalFeedback={totalFeedback}
                    positivePercentage={positivePercentage}
                />
            ) : (
                <Notification message="No feedback collected yet." />
            )}

        </div>
    );
};

export default App;
