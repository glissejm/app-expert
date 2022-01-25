import React from 'react';

export default function ButtonLogin({ name, buttonStyle, handleLogin }) {
  return (
    <button
      type='submit'
      class='w-full block bg-blueThird hover:bg-darkSecondary focus:bg-blueThird font-semibold rounded-lg
    px-4 py-2 mt-4 border border-dark'
      onClick={handleLogin}
    >
      {name}
    </button>
  );
}
