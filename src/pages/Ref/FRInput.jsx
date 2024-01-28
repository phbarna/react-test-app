import { forwardRef } from "react"
import { Input } from '@chakra-ui/react'
// forward ref example
const FRInput = forwardRef(( setInputValue , ref) => (
    <>
        <Input onChange={setInputValue} width="auto"
            ref={ref} type="text" />
            
    </>
));

export default FRInput;