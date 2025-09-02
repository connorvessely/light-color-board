import { useEffect } from "react";
import DotRow from "./DotRow"

function ColorBoard() {
    //TODO: select proper row length
    const rowLength = 30
    const numberOfRows = Array.from({ length: 18 }, (_, i) => i)
    
    
    return (
        <div className="color-board">
            {numberOfRows.map(i => <DotRow key = {i} length = {rowLength} rowIndex = {i}/>) }
        </div>
    )
}

export default ColorBoard;