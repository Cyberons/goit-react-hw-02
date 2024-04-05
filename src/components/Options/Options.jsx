import PropTypes from 'prop-types';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div>
            {/* Кнопки для збору відгуків */}
            <button onClick={() => updateFeedback('good')}>Good</button>
            <button onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button onClick={() => updateFeedback('bad')}>Bad</button>

            {/* Кнопка Reset, яка відображається тільки у разі наявності хоча б одного відгуку */}
            {totalFeedback > 0 && (
                <button onClick={resetFeedback}>Reset</button>
            )}
        </div>
    );
};

Options.propTypes = {
    resetFeedback: PropTypes.object.isRequired, // перевірка пропсу 
    totalFeedback: PropTypes.number.isRequired,
    updateFeedback: PropTypes.number.isRequired
};

export default Options;
