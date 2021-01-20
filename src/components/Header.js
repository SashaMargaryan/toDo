import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({titel, onAdd, showAdd}) => {
    let t = titel
   
    return (
        <header className='header'>
            <h1>{t}</h1>
            <Button  
                color={showAdd ? "red" : "green"} 
                text={showAdd ? "Close" : "Add"} 
                onClick={onAdd}
            />
        </header>
    )
};

Header.propTypes = {
    titel: PropTypes.string.isRequired
};

Header.defaultProps = {
    titel: "Task Tracker"
};

// const headingStayle = {
//     color: 'red',
//     backgroundColor: 'orange'
// }

export default Header
