import ColorDot from "./ColorDot"
function DotRow({rowIndex, length}){
    const rows = Array.from({ length: length }, (_, i) => i)
    return (
        <div className={"dot-row " + (rowIndex%2 == 0 ? "even" : "")}>
            {rows.map(i => <ColorDot className = {i + " " + rowIndex} key={i + " " + rowIndex} /> )}
        </div>
    )
}

export default DotRow;