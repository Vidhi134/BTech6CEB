import * as React from "react";
class StateXYZ extends React.Component {
    state = {
        first:false,
        second:3.14,
        third:"hello world",
        fourth:"red",
        fifth:"green"
    
};
constructor(){
    super();
        setTimeout(() =>{
            this.setState({
                first:true,
                second:5,
                third:"React",
                fourth:"blue",
                fifth:"yellow",
            });
            },3000);
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
export default StateXYZ;




//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
//import Timetable from './lec2412/timetable'
//import StateABC from './lec3012/statement1'
//import StateXYZ from './lec3012/statement2'
//import Component1 from './lec2412/component1'
//import HtmlComponent from './lec2412/htmlcomp'

//createRoot(document.getElementById('root')).render(
  //<StrictMode>
    //<StateXYZ/>
  //</StrictMode>,
//)
