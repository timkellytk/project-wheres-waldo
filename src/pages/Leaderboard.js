import React, { useState, useEffect } from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";
import LeaderboardTable from "../components/LeaderboardTable/LeaderboardTable";
import { firestore } from "../firebase";
import { PrimaryBtn, SecondaryBtn } from "../components/Utility/Btns/Btns";

const Leaderboard = ({ level, setLevel, levelData = {} }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const getLeaderboardData = async () => {
      const leaderArray = [];
      const firestoreData = await firestore.collection("highscores").get();
      firestoreData.forEach((doc) => {
        leaderArray.push(doc.data());
      });
      setLeaderboardData(leaderArray);
    };

    getLeaderboardData();
  }, []);

  const levelsArr = Object.keys(levelData)?.map((num) => {
    const number = parseInt(num)
    const level = levelData[number];
    return { number, image: level.imageSmall }
  });

  const Levels = () => {
    return levelsArr.map((i) => {
      return (
        <Card
          img={i.image}
          alt={"i " + i.number + "Where's Waldo"}
          small
          active={level === i.number}
          clicked={() => setLevel(i.number)}
          key={i.number}
        >
          {"Level " + i.number}
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
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
          <Levels />
        </div>
        <LeaderboardTable values={leaderboardData} level={level} />
      </div>
    </Wrapper>
  );
};

export default Leaderboard;
