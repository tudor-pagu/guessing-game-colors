import React, { useContext } from 'react'
import AppContext from './AppContext'
import { range } from './util';

type Props = {
  show:boolean,
  secretSequence:string[],
  colors:string[],
}

const DEFAULT_COLOR = "bg-blue-300";

function getVerdict(colors:string[], correctColors:string[], n : number) {
  let nr_white = 0, nr_black = 0;
  for (let i = 0; i < n; i++) {
    if (colors[i] == correctColors[i]) {
      nr_white++;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j && colors[i] == correctColors[j]) {
        nr_black++;
        break;
      }
    }
  }

  let verdict = Array<string>(n);
  for (let i = 0; i < n; i++) {
    if (nr_white > 0) {
      verdict[i] = "bg-gray-100";
      nr_white--;
    } else if (nr_black > 0) {
      verdict[i] = "bg-gray-900";
      nr_black--;
    } else {
      verdict[i] = DEFAULT_COLOR;
    }
  }
  return verdict;
}

const ResultsBoard = (props: Props) => {
    const columns = useContext(AppContext).columns;
    const verdict = getVerdict(props.colors, props.secretSequence, columns);
    return (
    <>
    {
      range(columns).map((i:number) => {
        let color = DEFAULT_COLOR;
        if (props.show) {
          color = verdict[i];
        }
        console.log(props.show);
        return(
        <div className={'m-1 h-10 w-10 flex ' + color}>
        </div>
        )
      })
    }
    </>
  )
}

export default ResultsBoard;