import React from "react";
import ReactDOM from "react-dom";
import Parent from "./ concept/FunctionalCounter"
import CountingParent from "./ concept/ClassComponent";
import CountingParentConstructorLess from "./ concept/classComponentWithoutConstructor";

const Lesson =() =>
(<div>
    <CountingParent/>
    <br/>
    <Parent/>
    <br/>
    <CountingParent/>
    <br/>
    <CountingParentConstructorLess/>
</div>);

ReactDOM.render(<Lesson />, document.querySelector('#root'));