import React from 'react'
import { useContext } from 'react'
import AppContext from './AppContext'
import ColorPickerBlock from './ColorPickerBlock'
type Props = {
    selectedColor:string,
    setSelectedColor : (newSelectedColor: string) => void,
}

const ColorPicker = (props: Props) => {
    const context = useContext(AppContext);
    const colors = context.colors;
    const setSelectedColor = props.setSelectedColor;
    return (
        <div className='flex'>
        {
            colors.map((color:string) => {
                return (
                    <ColorPickerBlock selectedColor={props.selectedColor} color={color} setSelectedColor={setSelectedColor}/>
                )
            })
        }
        </div>
    )
}

export default ColorPicker;