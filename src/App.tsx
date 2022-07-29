import { FC, useCallback, useState } from 'react'

import { TodosItems } from './components/TodosItems'
import { Search } from './components/ui/Search'
import { FilterCondition, TodosFilter } from './components/TodosFilter'

import { ITodo } from './@types/ITodo'

import styles from './App.module.scss'
import { useFiltersTodos } from './hooks/useFiltersTodos'

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [activeFilter, setActiveFilter] = useState<FilterCondition>('All')

  const handleTodos = useCallback((item: ITodo) => setTodos((prev) => [...prev, item]), [setTodos])
  const handleRemoveTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((item) => item.id !== id)),
    [setTodos]
  )
  const handleCompleteTodo = useCallback(
    (todosId: string) =>
      setTodos((prev) =>
        [...prev].map((e) => (e.id === todosId ? { ...e, isCompleted: !e.isCompleted } : e))
      ),
    [setTodos]
  )

  const filteredTodos = useFiltersTodos(activeFilter, todos)

  return (
    <div className=' bg-slate-800 min-h-screen '>
      <div className={styles.container}>
        <h1 className='text-center font-medium text-7xl text-slate-300 mb-5'>TODOS</h1>
        <Search handleTodos={handleTodos} />
        {todos.length !== 0 && (
          <>
            <TodosFilter todos={todos} handleFilter={setActiveFilter} active={activeFilter} />
            <TodosItems
              filteridTodos={filteredTodos}
              handleCompleteTodo={handleCompleteTodo}
              handleRemoveTodo={handleRemoveTodo}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default App
