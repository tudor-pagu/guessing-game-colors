import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import {range} from "./util";
import ColorInput from "./ColorInput";
import ResultsBoard from "./ResultsBoard";
import SubmitButton from './SubmitButton';
import BoardRow from './BoardRow';
type Props = {
    selectedColor : string,
    secretSequence:string[],
    loseGame : () => void,
    winGame : () => void,
    finished:number,
};

const Board: React.FC<Props> = (props) => {
  const rows = useContext(AppContext).rows; 
  const [activeRow,setActiveRow] = useState(0);
  let activateNextRow = () => {
    setActiveRow(activeRow + 1);
    if (activeRow + 1 == rows) {
        props.loseGame();
    }
  }
  return (
    <>
    {
        range(rows).map((row) => {
            return (
                <div>
                <BoardRow winGame={props.winGame} secretSequence={props.secretSequence} activateNextRow={activateNextRow} activeRow={activeRow} selectedColor={props.selectedColor} row={row} isActive={row==activeRow && props.finished==0}/>
                </div>
            )
        })
    }
    </>
  );
}
export default Board;