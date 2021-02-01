import React from "react";
import { PrimaryBtn } from "../Utility/Btns/Btns";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

export default function Modal({
  showModal,
  seconds,
  username,
  updateUsername,
  submitScore,
  closeDropdown,
}) {
  const gameoverLoading = (
    <div className="flex p-6 my-4 justify-center">
      <ReactLoading type={"balls"} color={"#f87171"} />
    </div>
  );

  const gameoverForm = (
    <>
      <div className="relative p-6 my-4 flex-auto">
        <p className="mb-4 text-gray-600 text-lg leading-relaxed">
          Enter your name to save your score on the global leaderboard.
        </p>
        <label
          for="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={updateUsername}
          maxlength="30"
          className="p-4 mt-3 outline-none border focus:border-indigo-500 block w-full shadow-md rounded-md"
        />
      </div>
      {/*footer*/}
      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
        <Link
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
          onClick={closeDropdown}
          to="/"
        >
          Cancel
        </Link>
        <PrimaryBtn onClick={submitScore} link={"leaderboard"}>
          Submit Score
        </PrimaryBtn>
      </div>
    </>
  );

  const gameoverModal = (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold">
                You finished in {seconds ? `${seconds} seconds!` : "..."}
              </h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {seconds ? gameoverForm : gameoverLoading}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );

  return showModal ? gameoverModal : null;
}
