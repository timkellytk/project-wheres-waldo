import React from 'react';
import CharacterDropdownField from './CharacterDropdownField/CharacterDropdownField';
import Odlaw from '../../img/character/odlaw.jpg';
import Waldo from '../../img/character/waldo.jpg';
import Wenda from '../../img/character/wenda.jpg';
import Wizard from '../../img/character/wizard.jpg';

const CharacterDropdown = (props) => {
  return (
    <div
      className={`${props.show ? 'absolute' : 'hidden'}`}
      style={props.clickLocation}
    >
      <div
        className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 overflow-auto"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <CharacterDropdownField
          image={Waldo}
          title="Waldo"
          clicked={props.clicked}
        />
        <CharacterDropdownField
          image={Odlaw}
          title="Odlaw"
          clicked={props.clicked}
        />
        <CharacterDropdownField
          image={Wizard}
          title="Wizard"
          clicked={props.clicked}
        />
        <CharacterDropdownField
          image={Wenda}
          title="Wenda"
          clicked={props.clicked}
        />
      </div>
    </div>
  );
};

export default CharacterDropdown;
