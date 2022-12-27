import React from 'react';
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";
import {connect} from "react-redux";
import {onDecrement, onIncrement} from "../../store/actions/counterAction";

const CounterDisplay = (props) => {
    return (
        <>
            <CounterOutput />
            <CounterControl label="Increment" onClick = {props.onIncrement} />
            <CounterControl label="Decrement" onClick = {props.onDecrement} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(onIncrement()),
        onDecrement: () => dispatch(onDecrement())
    }
}

export default connect(null, mapDispatchToProps)(CounterDisplay);