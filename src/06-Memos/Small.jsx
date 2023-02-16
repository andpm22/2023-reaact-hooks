import {memo} from 'react';

export const Small = memo(( {counter} ) => {
    console.log(":)");
  return (
    <small>{counter}</small>
  )
})