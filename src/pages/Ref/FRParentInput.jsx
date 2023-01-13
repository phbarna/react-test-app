import FRInput from './FRInput'
import { useRef, useState } from 'react'

export default function FRParentInput() {

    const [count, setCount] = useState(0);

    const inputRef = useRef();

    function clickHandler() {
        inputRef.current.focus();
        inputRef.current.value = '';
        setCount(0)
    }

    function incrementCount() {
        setCount(c => c + 1)
    }

    return (
        <div>
            <FRInput setInputValue={incrementCount} ref={inputRef} />
            <button onClick={clickHandler}>Clear and Focus</button>
            <h1>Render Count: {count}</h1>
        </div>
    )
}