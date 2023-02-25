import React from 'react'
import { range } from './util'
import AppContext from './AppContext'
import { useContext } from 'react'
import { useState } from 'react'
import ColorInputBlock from './ColorInputBlock'
type Props = {
    isActive : boolean,
    selectedColor : string,
    colors : string[],
    setColor : (id:number, newColor:string) => void,
}
const ColorInput = (props: Props) => {
    const columns = useContext(AppContext).columns;
    
    return (
    <>
    {
      range(columns).map((id) => {
        return(
            <ColorInputBlock selectedColor={props.selectedColor} id={id} color={props.colors[id]} setColor={props.setColor} isActive={props.isActive}/>
        )
      })
    }
    </>
  )
}

export default ColorInput;