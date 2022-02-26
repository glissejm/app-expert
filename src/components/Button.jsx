import React from 'react';

export default function Button({ name, buttonStyle, onClick }) {
  return (
    <button className={`${buttonStyle}`} onClick={onClick}>
      {name}
    </button>
  );
}


