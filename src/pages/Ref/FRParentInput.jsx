import FRInput from './FRInput'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@chakra-ui/react'
export default function FRParentInput() {

    const [count, setCount] = useState(0);

    const inputRef = useRef();

    useEffect(() => {
        clickHandler();
    },[])

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
            <Button colorScheme="teal" onClick={clickHandler}>Clear and Focus</Button>
            <h1>Render Count: {count}</h1>
        </div>
    )
}