import ColorDot from "./ColorDot"
function DotRow(props){
    const rows = Array.from({ length: props.length }, (_, i) => i)
    return (
        <div className={"dot-row " + props.rowIndex}>
            {rows.map(i => <ColorDot className = {i + " " + props.rowIndex} key={i + " " + props.rowIndex} /> )}
        </div>
    )
}

export default DotRow;