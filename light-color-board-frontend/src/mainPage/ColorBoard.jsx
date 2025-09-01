import { useEffect } from "react";
import ColorDot from "./ColorDot";
import './ColorBoard.css'

function ColorBoard() {
    const rowLength = 24
    const numberOfRows = 24
    useEffect(()=>{
        
    }, [])
    return (
        <div className="color-board">
            {Array.from({length: rowLength},(_,index) => <ColorDot key={index} />)}
        </div>
    )
}

export default ColorBoard;