import React from 'react'

type Props = {
    isActive : boolean,
    id:number,
    color:string,
    selectedColor :string ,
    setColor : (id:number, newColor:string) => void, 
}

const ColorInputBlock = (props: Props) => {
  return (
    <div className={'flex flex-1 m-1 h-10 w-10 ' + props.color} onClick={() => {if (props.isActive) {props.setColor(props.id, props.selectedColor)}}}> 
    </div>
  )
}

export default ColorInputBlock;