import React from "react";
import Card from "../components/Card/Card";
import Wrapper from "../components/Wrapper/Wrapper";
import { PrimaryBtn } from "../components/Utility/Btns/Btns";
import { Link } from "react-router-dom";
import level1 from "../img/levels/level-1.jpg";
import level2 from "../img/levels/level-2.jpg";
import level3 from "../img/levels/level-3.jpg";
import level4 from "../img/levels/level-4.jpg";
import level5 from "../img/levels/level-5.jpg";
import level6 from "../img/levels/level-6.jpg";

const Home = ({ setLevel }) => {
  const linkData = [
    {
      number: 1,
      img: level1,
      characters: { waldo: true, odlaw: true, wenda: false, wizard: true },
    },
    { number: 2, img: level2, characters: { waldo: true } },
    {
      number: 3,
      img: level3,
      characters: { waldo: true, odlaw: true, wenda: false, wizard: true },
    },
    { number: 4, img: level4, characters: { waldo: true, odlaw: true } },
    {
      number: 5,
      img: level5,
      characters: { waldo: true, odlaw: true, wenda: false, wizard: true },
    },
    { number: 6, img: level6, characters: { waldo: true } },
  ];

  const links = linkData.map((link) => {
    return (
      <Link to="/game">
        <Card
          img={link.img}
          clicked={() => setLevel(link.number)}
          alt={`Level ${link.number} Where's Waldo`}
          {...link.characters}
        >Level {link.number}</Card>
      </Link>
    );
  });
  return (
    <Wrapper>
      <div className="grid md:grid-cols-3 gap-4">
        {links}
      </div>
      <div className="bg-gray-50 mt-8">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Are you a Waldo expert?</span>
            <span className="block text-red-500">View the leaderboard</span>
          </h2>
          <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <PrimaryBtn link="/leaderboard">View Leaderboard</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
