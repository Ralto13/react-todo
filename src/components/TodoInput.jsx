import { useState } from "react"

function TodoInput({ onTodoAdd }){
  const [inputText, setInputText] = useState('')

  const handleInput = (event) => {
    console.log(event)
    const value = event.target.value
    setInputText(value)
  }

  const handleClick = () => {
    onTodoAdd(inputText)
    setInputText('')
  }
  
  return (
      <div>
        <input type="text" name="" id="" value={inputText} onChange={handleInput}/>
        <button onClick={handleClick}>add</button>
      </div>
  )
}

export default TodoInput