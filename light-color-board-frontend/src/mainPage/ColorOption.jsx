import { useContext } from "react";
import { MainPageContext } from "./MainPage";


function ColorOption({colorName}) {
    const {selectedColor, setSelectedColor} = useContext(MainPageContext);
    return (
        <div className={"color-option " + colorName + (selectedColor==colorName?" selected-color":"")} onClick={()=>setSelectedColor(colorName)}>
            
        </div>
    )
}

export default ColorOption;