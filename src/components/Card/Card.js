import React from 'react';
import Odlaw from '../../img/character/odlaw.jpg';
import Waldo from '../../img/character/waldo.jpg';
import Wenda from '../../img/character/wenda.jpg';
import Wizard from '../../img/character/wizard.jpg';

const Card = (props) => {
  return (
    <div
      className={`${
        props.active ? 'bg-red-100 ' : 'bg-white '
      }  hover:shadow rounded transition-shadow cursor-pointer`}
      onClick={props.clicked}
    >
      <img
        className={`${props.small ? 'h-40' : 'h-56'} w-full object-cover`}
        src={props.img}
        alt={props.alt}
      />
      <div className="p-4 flex justify-between align-middle">
        <h1 className="flex-shrink-0 lg:text-lg font-medium mr-3">
          {props.children}
        </h1>
        <div className="flex flex-wrap">
          {props.odlaw && (
            <img
              src={Odlaw}
              className="p-1 h-8 w-8 object-contain"
              alt="Odlaw"
            />
          )}
          {props.waldo && (
            <img
              src={Waldo}
              className="p-1 h-8 w-8 object-contain"
              alt="Waldo"
            />
          )}
          {props.wenda && (
            <img
              src={Wenda}
              className="p-1 h-8 w-8 object-contain"
              alt="Wenda"
            />
          )}
          {props.wizard && (
            <img
              src={Wizard}
              className="p-1 h-8 w-8 object-contain"
              alt="Wizard"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
