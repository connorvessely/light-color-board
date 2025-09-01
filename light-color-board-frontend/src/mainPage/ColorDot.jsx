import { useEffect, useState } from "react";
function ColorDot() {
    const [fillColor, setFillColor] = useState("")
    useEffect(()=>{
        
    }, [])
    return (
        <div className={"color-dot "+fillColor} onClick={()=>setFillColor("red")}>
            
        </div>
    )
}

export default ColorDot;