import { createContext, useState } from 'react';
import ColorOption from './ColorOption';
import './MainPage.scss'
import ColorBoard from './colorBoard'

export const SelectColorContext = createContext(null)

function MainPage() {
    


    const colorOptions = ["red", "green", "blue"]
    const [selectedColor, setSelectedColor] = useState(colorOptions[0])

    return (
        <div className='main-page'>
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
        </div>
    )
}

export default MainPage;