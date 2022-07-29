import { ITodo } from '../@types/ITodo'

export const useFiltersTodos = (activeFilter: string, todos: ITodo[]) => {
  return activeFilter === 'All'
    ? todos
    : activeFilter === 'Active'
    ? todos.filter((todo: ITodo) => todo.isCompleted === false)
    : todos.filter((todo: ITodo) => todo.isCompleted === true)
}
