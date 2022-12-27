import React from "react";
import ChildC from "./ChildC";

function ChildB({fName, lName}) {
    return (
        <>
            This is ChildB component
            <br />
            <ChildC />
        </>
    )
}

export default ChildB;
