import * as React from "react";
class StateABC extends React.Component {
    state = {
        first:false,
        second:3.14,
        third:"hello world",
        fourth:"red",
        fifth:"green"
    
}
render() {
    const {first,second,third,fourth,fifth} = this.state;
    return(
        <div>
            <button disabled={first}>My Button</button>
            <p style={{color:fourth}}>Value of Float integer is <strong> {second}</strong></p>
            <p style={{color:fifth}}>Value of String is <strong> {third}</strong></p>
        </div>
    );
}
}

export default StateABC;