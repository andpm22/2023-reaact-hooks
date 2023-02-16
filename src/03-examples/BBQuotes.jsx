import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";


export const BBQuotes = ({data}) => {

    const {author, quote} = !!data && data[0] //si la data tiene un valor en su posicion 0 retorne

    const pRef = useRef()
    const [size, setSize] = useState({width: 0, height: 0,})

    useLayoutEffect(() => {
        
        const {width, height} = pRef.current.getBoundingClientRect();
        setSize({width, height})

    }, [quote])

    return (
        <>
            <blockquote className="blockquote text-end" style={{display: 'flex'}} >
                <p ref={pRef} className="mb-3">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>{JSON.stringify(size)}</code>
        </>
    )
}
