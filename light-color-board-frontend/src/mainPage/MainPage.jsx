import { createContext, useState } from 'react';
import ColorOption from './ColorOption';
import './MainPage.scss'
import ColorBoard from './colorBoard'

export const MainPageContext = createContext(null)

function MainPage() {

    const colorOptions = ["red", "green", "blue", "yellow"]
    const [selectedColor, setSelectedColor] = useState(colorOptions[0])
    const [powerIsOn, setPowerIsOn] = useState(false)

    return (
        <div className='main-page'>
            <MainPageContext
                value={{
                    powerIsOn,
                    selectedColor,
                    setSelectedColor
                }}
            >
                <div className="sidebar">
                    <button className={'power-button ' + (powerIsOn ? "on" : "off")} onClick={()=>setPowerIsOn(!powerIsOn)}>
                        {powerIsOn ? "ON" : "OFF"}
                    </button>
                    <div className='palette'>
                        {colorOptions.map(color=><ColorOption key={color} colorName = {color} />)}
                    </div>
                </div>
                
                <ColorBoard></ColorBoard>
            </MainPageContext>
        </div>
    )
}

export default MainPage;