import React from 'react';
import Odlaw from '../../../img/character/odlaw.jpg';
import Waldo from '../../../img/character/waldo.jpg';
import Wenda from '../../../img/character/wenda.jpg';
import Wizard from '../../../img/character/wizard.jpg';

const Character = (props) => {
  let image = null;

  switch (props.name) {
    case 'Waldo':
      image = Waldo;
      break;
    case 'Odlaw':
      image = Odlaw;
      break;
    case 'Wenda':
      image = Wenda;
      break;
    case 'Wizard':
      image = Wizard;
      break;
    default:
      break;
  }

  return (
    <div
      className={`${
        props.found && 'opacity-20'
      } flex flex-col items-center pr-6 py-3`}
    >
      <img className="h-10 w-10 object-contain" src={image} alt={props.name} />
      <p className="text-sm font-bold">{props.name}</p>
    </div>
  );
};

export default Character;
