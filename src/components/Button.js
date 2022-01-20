import React from 'react';

export default function Button({nombre,buttonStyle}){
    return(
        <button className={`px-6 py-2 bg-secundary2 rounded-full text-primaty font-bold h-fit hover:bg-secundary3 ${buttonStyle}`} type="submit">{nombre}</button>
    )
}