import React from "react";
import {connect} from "react-redux";

function ChildC({fName, lName}){
    return(
        <>
            This is ChildC component
            <br />
            <h3>Data from Parent component is as follows:</h3>
            <h4>{fName}</h4>
            <h4>{lName}</h4>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        fName: state.userInfo.firstName,
        lName: state.userInfo.lastName
    }
}

export default connect(mapStateToProps,null)(ChildC);