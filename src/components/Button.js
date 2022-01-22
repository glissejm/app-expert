import React from 'react';

export default function Button({ name, buttonStyle }) {
  return (
    <button
      className={`px-6 py-2 bg-lightSecondary rounded-full text-primary font-bold h-fit hover:bg-darkSecondary ${buttonStyle}`}
      type="submit"
    >
      {name}
    </button>
  );
}
