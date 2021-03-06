import PropTypes from 'prop-types';

import React from "react";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor
  }


  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
   
    </header>
  );
}

Header.defaultProps = {
  text: 'feedback ui',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#171717'
}

Header.propTypes = {
text: PropTypes.string

}

export default Header;
