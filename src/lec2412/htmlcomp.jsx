import * as React from "react";
class HtmlComponent extends React.Component {
    render() {
        return (
            <div>
                <label>Textbox</label>
                <input type="text" />
                <br />

                <label>Checkbox</label>
                <input type="checkbox" />
                <br />
                
                <label>Radiobutton</label>
                <input type="radio" name="gender" value="male" /> Male
                <input type="radio" name="gender" value="female" /> Female
                <br />
                
                <label>Dropdown</label>
                <select>
                    <option value="0">Select</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </select>
                <br />
                
                <label>File Upload</label>
                <input type="file" />
                <br />

                <label>Colour</label>
                <input type="color" />
                <br />
                <label>date</label>
                <input type="datetime-local" />
                <br />
                
                </div>
        );
    }
    
};
export default HtmlComponent;