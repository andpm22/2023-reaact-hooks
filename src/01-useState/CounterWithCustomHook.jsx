import { useCounter } from "../hooks/useCounter";




export const CounterWithCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter();
    
  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        <hr />
        <button className="btn btn-light" onClick={increment} >+1</button>
        <button className="btn btn-light" onClick={reset}>Reset</button>
        <button className="btn btn-light" onClick={() => decrement(2)}>-1</button>
    </>
  )
}
