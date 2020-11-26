import React from 'react';

const Character = (props) => {
  return (
    <div
      className={`${
        props.found && 'opacity-20'
      } flex flex-col items-center pr-6 py-3`}
    >
      <img
        className="h-10 w-10 object-contain"
        src={props.image}
        alt={props.name}
      />
      <p className="text-sm font-bold">{props.name}</p>
    </div>
  );
};

export default Character;
