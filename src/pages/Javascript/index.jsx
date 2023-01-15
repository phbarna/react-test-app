import { useEffect } from "react";

export default function Javasript() {

    useEffect(() => {
        run();
    })

    function run() {
        let i = 1;
        function theFunction(name, profession) {
            console.log("My name is " + name + " and I am a " + profession + ".");
        }
        // theFunction("John", "fireman");
        // theFunction.apply(undefined, ["Susan", "school teacher"]);
        // theFunction.call("Claude", "mathematician");
        // theFunction(...["Matthew", "doctor"]); // used with the spread operator
        // console.log("");
        const foo = '' ?? 'default string';
        console.log(foo);
        // expected output: "default string"

        const baz = undefined ?? 42;
        console.log(baz);
        // expected output: 0


    }

    const mystyle = {
        padding: "10px",
        margin: "10px",
        height: "500px",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "black",
        padding: "10px",
        fontFamily: "Arial"
    };


    return (
        <>

            <h1>Page for testing Javascript</h1>
            <div className="intro">
                This is a sandbox for playing around with javascript and can change
            </div>
            <button onClick={run}>Run</button>
            <div style={mystyle} >{1}</div>

        </>
    )
}