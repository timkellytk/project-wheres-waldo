import React from 'react';
import Odlaw from '../../img/character/odlaw.jpg';
import Waldo from '../../img/character/waldo.jpg';
import Wenda from '../../img/character/wenda.jpg';
import Wizard from '../../img/character/wizard.jpg';

const Card = (props) => {
  return (
    <div className="bg-white rounded shadow transition-shadow hover:shadow-lg">
      <img class="h-56 w-full object-cover" src={props.img} alt={props.alt} />
      <div className="p-4 flex justify-between align-middle">
        <h1 className="text-lg font-medium">{props.children}</h1>
        <div className="flex">
          {props.odlaw && (
            <img src={Odlaw} className="p-1 h-8 w-8" alt="Odlaw" />
          )}
          {props.waldo && (
            <img src={Waldo} className="p-1 h-8 w-8" alt="Waldo" />
          )}
          {props.wenda && (
            <img src={Wenda} className="p-1 h-8 w-8" alt="Wenda" />
          )}
          {props.wizard && (
            <img src={Wizard} className="p-1 h-8 w-8" alt="Wizard" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
