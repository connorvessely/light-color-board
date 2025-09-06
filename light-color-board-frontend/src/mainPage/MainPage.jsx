import { createContext, useEffect, useState } from 'react';
import ColorOption from './ColorOption';
import './MainPage.scss'
import ColorBoard from './colorBoard'

export const MainPageContext = createContext(null)

function MainPage() {

    const colorOptions = ["red", "green", "blue", "yellow"]
    const [selectedColor, setSelectedColor] = useState(colorOptions[0])
    const [powerIsOn, setPowerIsOn] = useState(localStorage.getItem("power"))
    const [shouldClear, setShouldClear] = useState(false)
    const powerChange = ()=>{
        setPowerIsOn(!powerIsOn)
        localStorage.setItem("power", !powerIsOn)
    }

    return (
        <div className='main-page'>
            <MainPageContext
                value={{
                    powerIsOn,
                    selectedColor,
                    setSelectedColor,
                    shouldClear,
                    setShouldClear
                }}
            >
                <div className="sidebar">
                    <button className={'power-button ' + (powerIsOn ? "on" : "off")} onClick={powerChange}>
                        {powerIsOn ? "ON" : "OFF"}
                    </button>
                    <div className='palette'>
                        {colorOptions.map(color=><ColorOption key={color} colorName = {color} />)}
                    </div>
                    {/* <button className="save">
                        SAVE
                    </button> */}
                    <button onClick={()=>setShouldClear(true)}>
                        Clear
                    </button>
                </div>
                
                <ColorBoard></ColorBoard>
            </MainPageContext>
        </div>
    )
}

export default MainPage;