import * as React from "react";
class Component2 extends React.Component {
    render() {
        return(
        <div>
            <Component3/>
            <h1>Component2</h1>
            <h2>World</h2>
        </div>
        )
    }
}

class Component3 extends React.Component {
    render() {
        return(
        <div>
            <h1>Component3</h1>
            <h2>React</h2>
        </div>
        )
    }
}
class Component1 extends React.Component {
    render() {
        return(
        <div>
            <Component2 />
            <h1>Component1</h1>
            <h2>Hello</h2>
        </div>
        )
    }
};
export default Component1;