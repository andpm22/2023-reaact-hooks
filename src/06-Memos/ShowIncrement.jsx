import React from "react";


export const ShowIncrement = React.memo( ({increment}) => {
    console.log(':)');
  return (
    <button
        className="btn btn-light"
        onClick={() => {increment(5)}}
    >
        ++
    </button>
  )
})
