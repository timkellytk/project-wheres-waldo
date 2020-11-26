import React from 'react';

const CharacterDropdownField = (props) => {
  return (
    <a
      href="#menuitem"
      className="block text-sm font-semibold p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      onClick={() => props.clicked(props.title)}
      role="menuitem"
    >
      <div className="flex items-center">
        <img
          className="h-6 w-6 object-contain mr-2"
          src={props.image}
          alt={props.title}
        />
        <div>{props.title}</div>
      </div>
    </a>
  );
};

export default CharacterDropdownField;
