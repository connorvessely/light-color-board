import { useContext } from "react";
import { SelectColorContext } from "./MainPage";


function ColorOption({colorName}) {
    const {selectedColor, setSelectedColor} = useContext(SelectColorContext);
    return (
        <div className={"color-option " + colorName + (selectedColor==colorName?" selected-color":"")} onClick={()=>setSelectedColor(colorName)}>
            
        </div>
    )
}

export default ColorOption;