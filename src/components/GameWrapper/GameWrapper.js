import React from 'react';
import Header from '../Utility/Header/Header';
import Container from '../Utility/Container/Container';
import { PrimaryBtn } from '../Utility/Btns/Btns';
import Character from './Character/Character';

const GameWrapper = (props) => {
  const characters = props.characters.map((character) => {
    return (
      <Character
        name={character.character}
        found={character.found}
        key={character.character}
      />
    );
  });

  return (
    <>
      <Header>
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">{characters}</div>
            <div className="flex items-center">
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
