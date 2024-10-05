import React from 'react';

const Footer = () => {
  const footerContainerStyle = {
    backgroundColor: '#ff733b',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '18.5px 567px 18.6px 591px',
    boxSizing: 'border-box',
    maxWidth: '100%',
  };

  const footerHiddenStyle = {
    height: '59.1px',
    width: '1440px',
    position: 'relative',
    backgroundColor: '#ff733b',
    display: 'none',
    maxWidth: '100%',
  };

  const copyrightStyle = {
    position: 'relative',
    fontWeight: '500',
    zIndex: '1',
  };

  return (
    <div style={footerContainerStyle}>
      <footer style={footerHiddenStyle} />
      <div style={copyrightStyle}>Copyright © 2024</div>
    </div>
  );
};

export default Footer;
