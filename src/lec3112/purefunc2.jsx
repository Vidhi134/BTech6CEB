import * as React from "react";
const MyCustButton = ({var1,var2}) => (
    <button disabled={var1}>{var2}</button>
);
MyCustButton.defaultProps ={
    var1: false,
    var2: "Click Me"
};

export default MyCustButton;


{/* <MyCustButton var1={true}/>
    <br />
    <MyCustButton var2={"hello"}/>
    <br />
    <MyCustButton var1={true} var2={"world"}/> */}