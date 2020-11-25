import React from 'react';
import Card from '../components/Card/Card';
import Wrapper from '../components/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import level1 from '../img/levels/level-1.jpg';
import level2 from '../img/levels/level-2.jpg';
import level3 from '../img/levels/level-3.jpg';
import level4 from '../img/levels/level-4.jpg';
import level5 from '../img/levels/level-5.jpg';
import level6 from '../img/levels/level-6.jpg';

const Home = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/game">
          <Card img={level1} alt="Level 1 Where's Waldo" waldo odlaw wizard>
            Level 1
          </Card>
        </Link>
        <Card img={level2} alt="Level 2 Where's Waldo" waldo>
          Level 2
        </Card>
        <Card img={level3} alt="Level 3 Where's Waldo" waldo odlaw wizard wenda>
          Level 3
        </Card>
        <Card img={level4} alt="Level 4 Where's Waldo" waldo odlaw wenda>
          Level 4
        </Card>
        <Card img={level5} alt="Level 5 Where's Waldo" waldo odlaw wizard wenda>
          Level 5
        </Card>
        <Card img={level6} alt="Level 6 Where's Waldo" waldo>
          Level 6
        </Card>
      </div>
      <div className="bg-gray-50 mt-8">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Are you a Waldo expert?</span>
            <span className="block text-red-500">View the leaderboard</span>
          </h2>
          <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/leaderboard"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-500"
              >
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
