import ColorDot from "./ColorDot"
function DotRow({rowIndex, length}){
    const rows = Array.from({ length: length }, (_, i) => i)
    return (
        <div className={"dot-row " + (rowIndex%2 == 0 ? "even" : "")}>
            {rows.map(j => <ColorDot className = {rowIndex + " " + j} key={rowIndex + " " + j} id = {rowIndex + " " + j}/> )}
        </div>
    )
}

export default DotRow;