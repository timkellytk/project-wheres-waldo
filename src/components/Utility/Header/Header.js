import React from 'react';

const Header = (props) => {
  return (
    <header className="bg-white shadow-sm w-full fixed">
      {props.children}
    </header>
  );
};

export default Header;
