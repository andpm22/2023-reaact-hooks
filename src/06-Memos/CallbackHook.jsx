import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter]  = useState(0)

    // const increment = useCallback(
    //   () => {
    //     setCounter((v) => v + 1);
    //   },
    //   [],
    // )
    
    const increment = (v) => {
        setCounter(counter + v);
    }

    useEffect(() => {
        increment
    }, [setCounter])
    
  return (
    <>
        <h1>useCallBack Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment} />
    </>
  )
}
