import React, {useState} from 'react'

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return(<div className="container">
            <h1>Color-Picker</h1>
            <div classNmae="display" style={{backgroundColor: color}}>
                <p>Selected Color : {color}</p>
            </div>
            <label>Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}></input>
            </div>);
}

export default ColorPicker