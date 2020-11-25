import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Card from '../components/Card/Card';
import { PrimaryBtn, SecondaryBtn } from '../components/Utility/Btns/Btns';
import level1 from '../img/levels/level-1.jpg';
import level2 from '../img/levels/level-2.jpg';
import level3 from '../img/levels/level-3.jpg';
import level4 from '../img/levels/level-4.jpg';
import level5 from '../img/levels/level-5.jpg';
import level6 from '../img/levels/level-6.jpg';

const Leaderboard = () => (
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
        <Card img={level1} alt="Level 1 Where's Waldo" small active>
          Level 1
        </Card>
        <Card img={level2} alt="Level 2 Where's Waldo" small>
          Level 2
        </Card>
        <Card img={level3} alt="Level 3 Where's Waldo" small>
          Level 3
        </Card>
        <Card img={level4} alt="Level 4 Where's Waldo" small>
          Level 4
        </Card>
        <Card img={level5} alt="Level 5 Where's Waldo" small>
          Level 5
        </Card>
        <Card img={level6} alt="Level 6 Where's Waldo" small>
          Level 6
        </Card>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      Tim Kelly
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    0:03
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
);

export default Leaderboard;
