import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

export const Memorized = () => {
    const { counter, increment } = useCounter(100)

    const [show, setShow] = useState(true)


    return (
        <>
            <h1>Counter <Small counter={counter} /> </h1>
            <hr />

            <button
                onClick={increment}
            >+</button>
            <button
             
                onClick={() => { setShow(!show) }}
            >Show/Hide {JSON.stringify(show)}  </button>
        </>
    )
}
