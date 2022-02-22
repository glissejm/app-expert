import React from 'react';

export default function Button({ name, onClick }) {
  return (
    <button className="w-full block bg-blueThird hover:bg-darkSecondary focus:bg-blueThird font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark" type="submit" onClick={onClick}>
      {name}
    </button>
  );
}
