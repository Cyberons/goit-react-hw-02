import PropTypes from 'prop-types';
const Feedback = ({ feedbackTypes, totalFeedback, positivePercentage }) => {
    return (
        <div>
            {/* Рендеринг статистики */}
            <p>Good: {feedbackTypes.good}</p>
            <p>Neutral: {feedbackTypes.neutral}</p>
            <p>Bad: {feedbackTypes.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive feedback percentage: {positivePercentage}%</p>
        </div>
    );
};

Feedback.propTypes = {
    feedbackTypes: PropTypes.object.isRequired, // перевірка пропсу feedbackTypes
    totalFeedback: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Feedback;
