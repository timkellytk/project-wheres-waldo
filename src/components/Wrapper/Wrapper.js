import React from 'react';
import waldoTitle from '../../img/waldo-title.jpg';

const Wrapper = (props) => (
  <>
    <header className="flex justify-center items-center bg-white shadow w-full fixed">
      <img className="h-10 lg:h-16 px-4" src={waldoTitle} alt="waldo" />
      <h1 className="font-extrabold leading-none tracking-wider uppercase text-xl lg:text-4xl">
        <span className="text-blue-400">Where's </span>
        <span className="text-red-400">Waldo?</span>
      </h1>
    </header>
    <div className="container px-2 py-16 lg:px-4 lg:py-24 mx-auto">
      <main>{props.children}</main>
    </div>
  </>
);

export default Wrapper;
