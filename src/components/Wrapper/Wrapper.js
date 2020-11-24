import React from 'react';

const Wrapper = (props) => (
  <div className="container px-2 py-4 lg:px-4 lg:py-8 mx-auto">
    <header className="text-2xl lg:text-5xl mb-4 lg:mb-8 text-center font-extrabold tracking-wider uppercase">
      <h1>
        <span className="text-blue-400">Where's </span>
        <span className="text-red-400">Waldo?</span>
      </h1>
    </header>
    <main>{props.children}</main>
  </div>
);

export default Wrapper;
