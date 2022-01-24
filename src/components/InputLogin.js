import React from 'react';

export default function InputLogin({ type,name}) {
  return (
    <input type={type} 
                    placeholder={name} 
                    class=" bg-grayPrimary w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
  );
}
