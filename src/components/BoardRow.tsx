import React, { useContext } from 'react'
import SubmitButton from './SubmitButton';
import ColorInput from './ColorInput';
import { useState } from 'react';
import { range } from './util';
import ResultsBoard from './ResultsBoard';
import AppContext from './AppContext';
type Props = {
    row:number,
    isActive:boolean,
    selectedColor:string,
    activeRow:number,
    secretSequence:string[],
    activateNextRow : () => void,
    winGame : () => void,
}

function equals(a:any[], b:any[]) {
    
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const BoardRow = (props: Props) => {
    const validColors = useContext(AppContext).colors;
    const columns = useContext(AppContext).columns;
    const activeBackground = props.isActive ? "bg-yellow-200" : "";
    const [colors, setColors] = useState(range(columns).map(() => "bg-gray-400"));

    const setColor = (id:number, newColor : string) => {
        let newColors = colors.slice();
        newColors[id] = newColor;
        setColors(newColors);
    }

    let handleSubmit = () => {
        if (equals(colors,props.secretSequence)) {
            props.winGame();
        }
        if (props.isActive && colors.every((color) => {
            return validColors.includes(color);
        })) {
            props.activateNextRow();
        }
    }

    return (
    <div className={'flex' + " " + activeBackground}>
        <ColorInput colors={colors} setColor={setColor} selectedColor = {props.selectedColor} isActive={props.isActive}/>
        <div className='ml-3 flex'>
            <ResultsBoard show={props.activeRow > props.row } secretSequence={props.secretSequence} colors={colors} />
        </div>
        <SubmitButton handleSubmit={handleSubmit}/>
    </div>
    )
}

export default BoardRow;