import { useState } from "react";
import CancaleRequest from "./cleanup";

const ShowUser = ({ var3 }) => (var3 ? <CancaleRequest/>: null);
    function CustomComp() {
        const [show,setShow] = useState(false);
        return (
            <>
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide user ": "Show user"}
                </button>
                <ShowUser var3={show}/>
            </>
        );
        
    }
    export default CustomComp;