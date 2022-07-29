import React, { FC } from 'react'
import { ITodo } from '../../@types/ITodo'
import { TodoItem } from '../TodoItem/TodoItem'

export interface TodosItemsProps {
  filteridTodos: ITodo[]
  handleCompleteTodo: (todosId: string) => void
  handleRemoveTodo: (todosId: string) => void
}

export const TodosItems: FC<TodosItemsProps> = ({
  filteridTodos,
  handleCompleteTodo,
  handleRemoveTodo,
}) => {
  return (
    <div>
      {filteridTodos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          handleCompleteTodo={handleCompleteTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      ))}
    </div>
  )
}
