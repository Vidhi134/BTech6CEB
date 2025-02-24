import { useReducer } from "react";
function Func1(state, action){
    switch(action.type){
        case "changeName":
            return {...state, name: action.value};
        case "changeage":
            return {...state, age: action.value};
        default:
            return state
    }
}

function ReducerExmp(){
    const [state, dispatch] = useReducer(Func1, {name: "abc", age: 45});
    return(
        <div>
            <h1>Name: {state.name}</h1>
            <input type="text" value={state.name} onChange={(e) => dispatch({type: "changeName", value: e.target.value})} />
            <h1>Age: {state.age}</h1>
            <input type="number" value={state.age} onChange={(e) => dispatch({type: "changeage", value: parseInt(e.target.value)})} />
        </div>
    )
}

export default ReducerExmp;