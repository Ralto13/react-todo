function TodoList({ todos , onTodoRemove}) {

  return (
    <div>
    {
      todos.map((todo,index) => {
        return (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => onTodoRemove(todo, index)}>remove</button>
          </li>
        )
      })
    }
  </div>
  )
}

export default TodoList
