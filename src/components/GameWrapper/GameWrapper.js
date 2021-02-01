import React from 'react';
import Header from '../Utility/Header/Header';
import Container from '../Utility/Container/Container';
import { PrimaryBtn } from '../Utility/Btns/Btns';
import Character from './Character/Character';

const GameWrapper = ({ children, characters = []}) => {
  const gameCharacters = characters.map((character) => {
    return (
      <Character
        name={character.name}
        found={character.found}
        key={character.name}
      />
    );
  });

  return (
    <>
      <Header>
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center">{gameCharacters}</div>
            <div className="flex items-center">
              <div className="ml-8">
                <PrimaryBtn link="/">Return Home</PrimaryBtn>
              </div>
            </div>
          </div>
        </Container>
      </Header>
      <Container navPadding>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default GameWrapper;
