import React from "react";
import Card from "../components/Card/Card";
import Wrapper from "../components/Wrapper/Wrapper";
import { PrimaryBtn } from "../components/Utility/Btns/Btns";
import { Link } from "react-router-dom";

const Home = ({ setLevel, levelData = {} }) => {
  const links = Object.keys(levelData)?.map((number) => {
    const link = levelData[number];
    const characters = link.characters.map((char) => char.name.toLowerCase()).reduce((obj, name) => {
      return {...obj, [name]: true }
    }, {})

    return (
      <Link to="/game">
        <Card
          img={link.imageSmall}
          clicked={() => setLevel(link.level)}
          alt={`Level ${link.level} Where's Waldo`}
          {...characters}
        >
          Level {link.level}
        </Card>
      </Link>
    );
  });
  return (
    <Wrapper>
      <div className="grid md:grid-cols-3 gap-4">{links}</div>
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
