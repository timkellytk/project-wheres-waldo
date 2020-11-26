import React from 'react';
import Header from '../Utility/Header/Header';
import Container from '../Utility/Container/Container';
import { PrimaryBtn } from '../Utility/Btns/Btns';
import Character from './Character/Character';
import Odlaw from '../../img/character/odlaw.jpg';
import Waldo from '../../img/character/waldo.jpg';
import Wenda from '../../img/character/wenda.jpg';
import Wizard from '../../img/character/wizard.jpg';

const GameWrapper = (props) => {
  return (
    <>
      <Header>
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Character image={Waldo} name="Waldo" found />
              <Character image={Odlaw} name="Odlaw" />
              <Character image={Wizard} name="Wizard" found />
              <Character image={Wenda} name="Wenda" />
            </div>
            <div className="flex items-center">
              <div className="text-3xl font-semibold tracking-tighter leading-none">
                0:03
              </div>
              <div className="ml-8">
                <PrimaryBtn link="/">Return Home</PrimaryBtn>
              </div>
            </div>
          </div>
        </Container>
      </Header>
      <Container navPadding>
        <main>{props.children}</main>
      </Container>
    </>
  );
};

export default GameWrapper;
