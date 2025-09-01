import { createContext, useState } from 'react';
import ColorOption from './ColorOption';
import './MainPage.css'
import ColorBoard from './colorBoard'

export const SelectColorContext = createContext(null)

function MainPage() {
    


    const colorOptions = ["red", "green", "blue"]
    const [selectedColor, setSelectedColor] = useState(colorOptions[0])

    return (
        <>
        <SelectColorContext
            value={{
                selectedColor,
                setSelectedColor
            }}
        >
            <div className='palette'>
                {colorOptions.map(color=><ColorOption key={color} colorName = {color} />)}
            </div>
            <ColorBoard></ColorBoard>
        </SelectColorContext>
        </>
    )
}

export default MainPage;