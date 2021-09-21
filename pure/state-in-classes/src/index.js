import React from "react";
import ReactDOM from "react-dom";
import Parent from "./ concept/FunctionalCounter"
import CountingParent from "./ concept/ClassComponent";

const Lesson =() =>
(<div>
    <CountingParent/>
    <br/>
    <Parent/>
    <br/>
    <CountingParent/>
</div>);

ReactDOM.render(<Lesson />, document.querySelector('#root'));