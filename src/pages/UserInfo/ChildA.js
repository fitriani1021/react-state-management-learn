import React from "react";
import ChildB from "./ChildB";

function ChildA({fName, lName}) {
    return(
        <>
            This is ChildA component
            <br />
            <ChildB />
        </>
    )
}

export default ChildA;