import React from 'react';

const Sidebar = () => {
  const categories = [
    "Dresses",
    "Jumpsuits",
    "Blouses",
    "Shirts",
    "T-shirts",
    "Tank tops",
    "Tops",
    "Sweaters",
    "Sweatshirts",
    "Cardigans",
    "Blazers",
    "Jackets",
    "Coats",
    "Pants",
    "Jeans",
    "Tights",
    "Bodys",
    "Shorts",
    "Skirts",
  ];

  const containerStyle = {
    alignSelf: 'stretch',
    flex: '1',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: '30.5px 27px 30px',
    position: 'relative',
    fontSize: '18px',
    color: '#808080',
  };

  const overlayStyle = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    borderRadius: '0px 20px 20px 0px',
    backgroundColor: 'rgba(9, 15, 50, 0.05)',
  };

  const listStyle = {
    height: '1016px',
    width: '205px',
    overflow: 'hidden',
    flexShrink: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '49px 0px 9px',
    boxSizing: 'border-box',
    gap: '29.8px',
    zIndex: '1',
  };

  const titleStyle = {
    marginTop: '-52px',
    position: 'relative',
    fontWeight: '600',
    color: '#ff733b',
  };

  const itemStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle} />
      <div style={listStyle}>
        <div style={titleStyle}>All categories</div>
        {categories.map((category, index) => (
          <div key={index} style={itemStyle}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
