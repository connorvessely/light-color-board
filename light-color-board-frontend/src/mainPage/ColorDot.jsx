import { useContext, useEffect, useState } from "react";
import { MainPageContext } from "./MainPage";

function ColorDot() {
    const [fillColor, setFillColor] = useState("")
    const {powerIsOn, selectedColor, setSelectedColor} = useContext(MainPageContext);
    return (
        <div className={"color-dot "+ fillColor + (powerIsOn? " on": "")} 
            onClick={()=>fillColor==selectedColor?setFillColor(""):setFillColor(selectedColor)
        }>
            
        </div>
    )
}

export default ColorDot;