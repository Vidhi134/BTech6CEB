import * as React from "react";
import { UserContex } from "./file1";

export function ProvideUserdetails() {
    const user = React.useContext(UserContex);
    return (
        <p>
            Id : {user.id} <br />
            Name : {user.name}
        </p>
    );
}
export function Page1() 
{
    return (
        <div>
            <h1>Page 1</h1>
            <ProvideUserdetails />
        </div>
    );
}
export function Page2() {
    return (
        <div>
            <h1>Page 2</h1>
            <ProvideUserdetails />
        </div>
    );
}
export function Page3() {
    return (
        <div>
            <h1>Page 3</h1>
            <ProvideUserdetails />
        </div>
    );
}