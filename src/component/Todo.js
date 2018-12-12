import React from 'react'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  let style = {
    textDecoration: todo.isCompleted ? 'line-through' : ''
  }
  const handleComplete = () => {
    completeTodo(index)
  }

  const handleRemove = () => {
    removeTodo(index)
  }

  return (
    <div className='todo' style={style}>
      {todo.text}
      <div>
        <button onClick={handleComplete}>{todo.isCompleted ? '未完成' : '完成'}</button>
        <button onClick={handleRemove}>X</button>
      </div>
    </div>
  )
}

export default Todo
