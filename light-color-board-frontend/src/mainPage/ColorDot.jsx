import { useContext, useEffect, useState } from "react";
import { SelectColorContext } from "./MainPage";

function ColorDot() {
    const [fillColor, setFillColor] = useState("")
    const {selectedColor, setSelectedColor} = useContext(SelectColorContext);
    return (
        <div className={"color-dot "+ fillColor + (fillColor==""?"":" filled-in")} onClick={()=>setFillColor(selectedColor)}>
            
        </div>
    )
}

export default ColorDot;