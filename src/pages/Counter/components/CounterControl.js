import {Button} from "react-bootstrap";

const CounterControl = (props) => {
    return(
        <Button onClick={props.onClick}>
            {props.label}
        </Button>
    )
}

export default CounterControl;