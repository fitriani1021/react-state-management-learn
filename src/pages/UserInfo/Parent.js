import React, {useState} from "react";
import ChildA from "./ChildA";
import {handleFirstName, handleLastName} from "../../store/actions/userInfoAction";
import {connect} from "react-redux";

function Parent({setfName, setlName}){
    const onSetFirstName = (e) => {
        setfName(e.target.value);
    };

    const onSetLastName = (e) => {
        setlName(e.target.value);
    };

    return (
        <>
            <div>This is a Parent component</div>
            <br />
            <form>
                <input placeholder="first name" onChange={onSetFirstName} />
                <input placeholder="last name" onChange={onSetLastName} />
            </form>
            <br />
            <ChildA/>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setfName: (value) => dispatch(handleFirstName(value)),
        setlName: (value) => dispatch(handleLastName(value))
    }
}
export default connect(null, mapDispatchToProps)(Parent);