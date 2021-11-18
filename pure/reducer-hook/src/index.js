import React, { useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
    const [value, dipatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    return (
        <div>
            {value}
            <br />
            <button onClick={() => dipatch({ type: 'add' })}>+</button>
            <span style={{ paddingRight: '5px' }}> </span>
            <button onClick={() => dipatch({ type: 'sub' })}>-</button>
        </div>
    );
}

// could have writeen inside the function for reuse
const reducer = (state, action) => {
    switch (action.type) {
        case 'add': return [
            ...state, {
                id: state.length,
                name: action.name
            }];
            case'remove': 
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
};

function ShoppingList() {
    const inputRef = useRef();

    const [items, dispatch] = useReducer(reducer, []);


    function handleSubmit(e) {
        e.preventDefault(); // This prevents the page from reloading since its a form
        dispatch({
            type: 'add',
            name: inputRef.current.value
        });

        inputRef.current.value = '';
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => dispatch({ type: 'remove', id: item.id })}>X</button>
                    </li>
                ))}
            </ul>

            
        </>
    );
}

ReactDOM.render(
    <div>
        <Counter />
        <ShoppingList/>
    </div>
, document.getElementById('root'));