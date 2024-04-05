import { useState, useEffect } from 'react';
import './App.css'

import Description from './Description/Description'
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';


const App = () => {
    // Ініціалізуємо стан за допомогою функції, яка отримує початкові значення з localStorage
    const [feedbackTypes, setFeedbackTypes] = useState(() => {
        const storedFeedback = JSON.parse(localStorage.getItem('feedbackTypes'));
        return storedFeedback || { good: 0, neutral: 0, bad: 0 };
    });

    // Функція для оновлення стану в залежності від типу фідбеку
    const updateFeedback = feedbackType => {
        setFeedbackTypes(prevFeedback => ({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    // Функція для скидання зібраних відгуків
    const resetFeedback = () => {
        setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
    };

    // Зберігаємо стан у локальному сховищі при зміні
    useEffect(() => {
        localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
    }, [feedbackTypes]);

    // Обчислення загальної кількості відгуків
    const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

    // Обчислення відсотка позитивних відгуків
    const positivePercentage = Math.round((feedbackTypes.good / totalFeedback) * 100) || 0;

    return (
      <div>
        <Description />
        {/* Передаємо функції updateFeedback та resetFeedback як пропс до компонента Options */}
            <Options
                updateFeedback={updateFeedback}
                resetFeedback={resetFeedback}
                totalFeedback={totalFeedback}
            />
            {/* Умовний рендеринг для відображення компонента Feedback або повідомлення */}
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
