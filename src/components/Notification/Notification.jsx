import PropTypes from 'prop-types';

const Notification = ({ message }) => {
    return <p>{message}</p>;
};
Notification.propTypes = {
    message: PropTypes.object.isRequired, // checking props
    
};

export default Notification;