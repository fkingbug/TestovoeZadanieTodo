import React, { FC } from 'react'
import { ITodo } from '../../@types/ITodo'
import { TodoItem } from '../TodoItem/TodoItem'

export interface TodosProps {
  filteridTodos: ITodo[]
  handleCompleteTodo: (todosId: string) => void
  handleRemoveTodo: (todosId: string) => void
}

export const TodoItems: FC<TodosProps> = ({
  filteridTodos,
  handleCompleteTodo,
  handleRemoveTodo,
}) => {
  return (
    <div>
      {filteridTodos.map((todo) => (
        <TodoItem
          {...todo}
          handleCompleteTodo={handleCompleteTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </div>
  )
}
