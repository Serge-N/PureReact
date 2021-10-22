import React, { useState } from "react";

const LightSwitch = () => {
    const [light, setLight] = useState(false);

    const SwitchLight = () => (
        setLight(light=> !light)
    );

    return (
        <div>
            <button onClick={SwitchLight}>Switch Light</button>
            <br />
            <span> root is {light ? "light" : "dark"} </span>
        </div>
    );
}

export default LightSwitch;