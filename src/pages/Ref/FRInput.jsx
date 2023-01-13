import { forwardRef } from "react"

// forward ref example
const FRInput = forwardRef(({ setInputValue }, ref) => (
    <>
        <input onChange={setInputValue}
            ref={ref} type="text" />
    </>
));

export default FRInput;