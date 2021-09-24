import React from "react";
import ReactDOM from "react-dom";
import Parent from "./ concept/FunctionalCounter"
import CountingParent from "./ concept/ClassComponent";
import CountingParentConstructorLess from "./ concept/classComponentWithoutConstructor";
import Home from "./ concept/Home";

const Lesson =() =>
(<div>
    <CountingParent/>
    <br/>
    <Parent/>
    <br/>
    <CountingParent/>
    <br/>
    <CountingParentConstructorLess/>
    <br/>
    <Home/>
</div>);

ReactDOM.render(<Lesson />, document.querySelector('#root'));