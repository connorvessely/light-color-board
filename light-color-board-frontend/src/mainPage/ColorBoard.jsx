import { useEffect } from "react";
import './MainPage.css'
import DotRow from "./DotRow"

function ColorBoard() {
    const rowLength = 24
    const numberOfRows = Array.from({ length: rowLength }, (_, i) => i)
    
    
    return (
        <div className="color-board">
            {numberOfRows.map(i => <DotRow length = {rowLength} rowIndex = {i}/>) }
        </div>
    )
}

export default ColorBoard;