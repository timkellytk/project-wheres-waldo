import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Card from '../components/Card/Card';
import LeaderboardTable from '../components/LeaderboardTable/LeaderboardTable';
import { PrimaryBtn, SecondaryBtn } from '../components/Utility/Btns/Btns';
import level1 from '../img/levels/level-1.jpg';
import level2 from '../img/levels/level-2.jpg';
import level3 from '../img/levels/level-3.jpg';
import level4 from '../img/levels/level-4.jpg';
import level5 from '../img/levels/level-5.jpg';
import level6 from '../img/levels/level-6.jpg';

const Leaderboard = (props) => {
  const levelsArr = [
    { number: 1, image: level1 },
    { number: 2, image: level2 },
    { number: 3, image: level3 },
    { number: 4, image: level4 },
    { number: 5, image: level5 },
    { number: 6, image: level6 },
  ];

  const leaderboardValues = [
    { name: 'Tim Kelly', time: '0:03' },
    { name: 'Sarah Parker', time: '0:05' },
    { name: 'Luke Mcdonald', time: '0:10' },
    { name: 'Mahnoor Malik', time: '0:15' },
  ];

  const Levels = () => {
    return levelsArr.map((level) => {
      return (
        <Card
          img={level.image}
          alt={'Level ' + level.number + "Where's Waldo"}
          small
          active={props.level === level.number}
          clicked={() => props.setLevel(level.number)}
          key={level.number}
        >
          {'Level ' + level.number}
        </Card>
      );
    });
  };

  return (
    <Wrapper>
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Leaderboard
        </h1>
        <div className="mb-4">
          <PrimaryBtn link="/game">Play This Level</PrimaryBtn>
          <SecondaryBtn link="/" leftMargin>
            Back To Home
          </SecondaryBtn>
        </div>
        <div className="grid grid-cols-6 gap-3 mb-4">
          <Levels />
        </div>
        <LeaderboardTable values={leaderboardValues} />
      </div>
    </Wrapper>
  );
};

export default Leaderboard;
