import React from 'react';
import { Link } from 'react-router-dom';
import waldoTitle from '../../img/waldo-title.jpg';

const Wrapper = (props) => (
  <>
    <header className="flex justify-center bg-white shadow-sm w-full fixed">
      <Link to="/" className="flex justify-center items-center ">
        <img className="h-10 lg:h-16 px-4" src={waldoTitle} alt="waldo" />
        <h1 className="font-extrabold leading-none tracking-tight text-xl lg:text-4xl">
          <span className="text-blue-500">Where's </span>
          <span className="text-red-500">Waldo?</span>
        </h1>
      </Link>
    </header>
    <div className="container px-2 pt-16 pb-8 lg:px-4 lg:pt-24 mx-auto">
      <main>{props.children}</main>
    </div>
  </>
);

export default Wrapper;
