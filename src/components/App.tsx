import React from 'react';
import Board from './Board';
import AppContext from './AppContext';
import ColorPicker from "./ColorPicker"
import { useContext } from 'react';
import { useState } from 'react';
import { range } from './util';
import ColorInput from './ColorInput';
function random(r: number) {
  return Math.floor(Math.random() * r);
}

function get_random_sequence(n: number) {
  let taken = Array(n);
  for (let i = 0; i < n; i++) {
    taken[i] = 0;
  }
  let result = Array(n);
  for (let i = 0; i < n; i++) {
    let xth = random(n - i);
    for (let j = 0; j < n; j++) {
      if (taken[j] == 0) {
        if (xth == 0) {
          result[i] = j;
          taken[j] = 1;
          break;
        } else {
          xth--;
        }
      }
    }
  }
  return result;
}


function App() {
  const context = useContext(AppContext);
  const [selectedColor, setSelectedColor] = useState(context.colors[0]);
  const [finished, setFinsihed] = useState(0);

  let loseGame = () => {
    setFinsihed(1);
  }
  let winGame = () => {
    setFinsihed(2);
  }
  const setSelectedColor2 = (newColor: string) => {
    setSelectedColor(newColor);
  };



  const [secretSequence, setSecretSequence] = useState(get_random_sequence(context.colors.length).slice(0, context.columns).map((i) => {
    return context.colors[i];
  }));

  console.log(secretSequence);
  
  return (
    <div className="bg-indigo-100 h-screen App flex flex-1 items-center justify-center">
      <div className='flex items-center gap-10 flex-wrap'>
        <ColorPicker setSelectedColor={setSelectedColor2} selectedColor={selectedColor} />
        <div>
          <Board winGame={winGame} loseGame={loseGame} secretSequence={secretSequence} selectedColor={selectedColor} finished={finished} />
        </div>
        {
          (finished == 1) ? ( // 
            <>
              <div>
                Game over! Solution was:
              </div>
              <ColorInput colors={secretSequence} isActive={false} selectedColor={""} setColor={()=>{}} />
            </>
          ) : null
        }
        {
          (finished == 2) ? (
            <div>
              You Win! Congratulations
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default App;
