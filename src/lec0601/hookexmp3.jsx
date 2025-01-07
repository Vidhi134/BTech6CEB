import { useState } from "react";

function StateExample3() {
    const [color, setColor] = useState("green");
    const [bld, setBld] = useState(100);
  const [itl, setItl] = useState("");
  const [txtdec, setTxtDec] = useState("");
    return(
        <div>
            <input type="radio" name="color" onChange={() => setColor("Yellow")} />
            {"Yellow"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("Red")} />
            {"Red"}
            <br />
            <input type="radio" name="color" onChange={() => setColor("Blue")} />
            {"Blue"}
            <br />

            <input type="checkBox" onChange={(e) => setBld(e.target.checked ? 900 : 100)}/>
            {"Bold"}
            <br />
            <input type="checkBox"  onChange={(e) => setItl(e.target.checked ? "italic" : "")}/>
            {"Italic"}
            <br />
            <input type="checkBox"  onChange={(e) => setTxtDec(e.target.checked ? "underline" : "")}/>
            {"Underline"}
            <br />
            <p style={{
                color: color,
                fontWeight: bld,
                fontStyle: itl,
                textDecoration: txtdec,
                }}>
                This is the text content for Display Color...
                </p>
        </div>
    );
}
export default StateExample3;