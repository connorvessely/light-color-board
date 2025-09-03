import { useContext, useEffect, useState } from "react";
import { MainPageContext } from "./MainPage";

function ColorDot({id}) {
    const [fillColor, setFillColor] = useState(localStorage.getItem(id))
    const {powerIsOn, selectedColor,shouldClear, setShouldClear} = useContext(MainPageContext);

    useEffect(()=>{
        localStorage.setItem(id, fillColor)
    }, [fillColor])

    useEffect(()=>{
        if (shouldClear){
            setFillColor("")
            setShouldClear(false)
        }
    }, [shouldClear])
   
    return (
        <div className={"color-dot "+ fillColor + (powerIsOn? " on": "")} 
            onClick={()=>fillColor==selectedColor?setFillColor(""):setFillColor(selectedColor)
        }>
            
        </div>
    )
}

export default ColorDot;