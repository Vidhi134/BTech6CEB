import { useState,useEffect } from "react";
import{Promise} from "bluebird";
Promise.config({cancellation: true});
function fetchUser(){
    return new Promise((resove) =>{
        setTimeout(()=>{
            resove({id:1, name:"RKU Student"});
        },5000);
    })
}
function CancaleRequest(){
    const [id,setId] = useState("loading........");
    const [name, setName] = useState("loading........");
    useEffect(()=>{
        const promise = fetchUser().then((var1) => { 
            setId(var1.id),
            setName(var1.name)
        
    });
    return ()=> {
        promise.cancel();
};
    });
    return (
        <div>
            User: {name}
            <br/>
            ID: {id}

        </div>
    );
}

export default CancaleRequest;