import React from 'react';
import Header from '../Utility/Header/Header';
import Container from '../Utility/Container/Container';
import { Link } from 'react-router-dom';
import waldoTitle from '../../img/waldo-title.jpg';

const Wrapper = (props) => (
  <>
    <Header>
      <div className="flex justify-center">
        <Link to="/" className="flex justify-center items-center ">
          <img className="h-10 lg:h-16 px-4" src={waldoTitle} alt="waldo" />
          <h1 className="font-extrabold leading-none tracking-tight text-xl lg:text-4xl">
            <span className="text-blue-500">Where's </span>
            <span className="text-red-500">Waldo?</span>
          </h1>
        </Link>
      </div>
    </Header>
    <Container navPadding>
      <main>{props.children}</main>
    </Container>
  </>
);

export default Wrapper;
