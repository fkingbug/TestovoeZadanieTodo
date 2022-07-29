import { FC, useCallback, useMemo, useState } from 'react'

import { TodoItems } from './components/TodoItems'
import { Search } from './components/ui/Search'
import { TodosFilter } from './components/TodosFilter'

import { ITodo } from './@types/ITodo'

import styles from './App.module.scss'
import { useFiltersTodos } from './hooks/useFiltersTodos'

export interface TodoContextInterface {
  handleCompleteTodo: (id: string) => void
}

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const handleTodos = useCallback((item: ITodo) => setTodos((prev) => [...prev, item]), [])
  const handleRemoveTodo = useCallback(
    (id: string) => setTodos((prev) => prev.filter((item) => item.id !== id)),
    []
  )
  const handleCompleteTodo = useCallback(
    (todosId: string) =>
      setTodos((prev) =>
        [...prev].map((e) => (e.id === todosId ? { ...e, isCompleted: !e.isCompleted } : e))
      ),
    [todos]
  )

  const handleFilter = useCallback((str: string) => setActiveFilter(str), [activeFilter])
  const filteredTodos = useMemo(() => useFiltersTodos(activeFilter, todos), [activeFilter, todos])

  return (
    <div className=' bg-slate-800 min-h-screen '>
      <div className={styles.container}>
        <h1 className='text-center font-medium text-7xl text-slate-300 mb-5'>TODOS</h1>
        <Search handleTodos={handleTodos} />
        {todos.length !== 0 && (
          <>
            <TodosFilter todos={todos} handleFilter={handleFilter} active={activeFilter} />
            <TodoItems
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
