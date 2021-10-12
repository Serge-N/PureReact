import React, { useState } from "react";
import PropTypes from "prop-types";

function StepTracker({number}) {
    const [steps, setSteps] = useState(number);

    function increment() {
        setSteps(steps => steps + 1);
    }

    return (
        <div>
            Today you've taken {steps} steps!
            <br />
            <button onClick={increment}>Take a step {">"}</button>
        </div>
    );
}

StepTracker.propTypes = {
    number: PropTypes.number.isRequired
}

export default StepTracker;