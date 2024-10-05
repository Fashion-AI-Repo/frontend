import React from 'react';

const MenWomen = () => {
  const containerStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    position: 'relative',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: 'inherit',
  };

  const inactiveLinkStyle = {
    alignSelf: 'stretch',
    position: 'relative',
    textTransform: 'uppercase',
    color: '#808080',
  };

  return (
    <div style={containerStyle}>
      <a href="#" style={linkStyle}>
        women
      </a>
      <div style={inactiveLinkStyle}>men</div>
    </div>
  );
};

export default MenWomen;
