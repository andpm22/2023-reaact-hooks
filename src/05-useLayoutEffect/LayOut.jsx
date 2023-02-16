import { useCounter, useFetch } from "../hooks"
import { BBQuotes, LoadingQuote } from "../03-examples"



export const LayOut = () => {

    const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    
  return (
    <>

        <h1>BreakingBad Quotes</h1>
        <hr/>
        {
            isLoading ? <LoadingQuote /> : <BBQuotes data={data}/>
    
        }    
        <button disabled={isLoading} className="btn btn-light mt-2" onClick={increment}>Next quote</button>    
        
    </>
  )
}
