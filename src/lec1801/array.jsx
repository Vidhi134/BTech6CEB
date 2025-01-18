// pass array of strings as arguments
// convert array to unordered list
import * as React from "react";

function fetchListData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["React", "JavaScript", "CSS", "HTML", "Node.js"]);
        }, 2000);
    });
}

function ListSimulation() {
    const [items, setItems] = React.useState(["Loading..."]);

    React.useEffect(() => {
        fetchListData().then((data) => {
            setItems(data);
        });
    }, []);

    return (
        <div>
            <h1>Skills:</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListSimulation;

