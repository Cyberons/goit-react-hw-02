import PropTypes from 'prop-types';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div>
            {/* Feedback buttons */}
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>

            {/* The Reset button, which is displayed only if there is at least one feedback */}
            {totalFeedback > 0 && (
                <button onClick={resetFeedback}>Reset</button>
            )}
        </div>
    );
};

Options.propTypes = {
    resetFeedback: PropTypes.object.isRequired, // checking props 
    totalFeedback: PropTypes.number.isRequired,
    updateFeedback: PropTypes.number.isRequired
};

export default Options;
