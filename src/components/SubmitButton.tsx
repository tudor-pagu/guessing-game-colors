import React from 'react'

type Props = {
    handleSubmit : () => void,
}

const SubmitButton = (props: Props) => {
  return (
    <button className='ml-5 bg-green-400 flex items-center justify-center m-1 p-2' onClick={() => {props.handleSubmit()}}>Submit</button>
  )
}

export default SubmitButton;