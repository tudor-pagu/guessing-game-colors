import React from 'react'

type Props = {
    color : string,
    selectedColor : string,
    setSelectedColor : (newSelectedColor : string) => void,
}

const ColorPickerBlock = (props: Props) => {
  const selectedCheck = ( (props.color == props.selectedColor) ? "border-current border-2" : "");  
  return (
    <div onClick={() => {props.setSelectedColor(props.color)}} className={"h-10 w-10 m-1 " + props.color + " " + selectedCheck}></div>
  )
}

export default ColorPickerBlock;