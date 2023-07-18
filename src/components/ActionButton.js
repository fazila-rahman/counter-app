import React from "react";

function ActionButton(props) {
    let { action, title} = props;
    return (
        <button className="btn-grad btn-grad:hover" onClick={action} >{title}</button>
    );
}

export default ActionButton;
