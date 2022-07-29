import { FC, useMemo } from 'react'
import { ITodo } from '../../@types/ITodo'

import styles from './TodosFilter.module.scss'

export type FilterCondition = 'All' | 'Active' | 'Complete'
const filterTodo: FilterCondition[] = ['All', 'Active', 'Complete']

export interface TodosFilterProps {
  active: FilterCondition
  handleFilter: (filterItem: FilterCondition) => void
  todos: ITodo[]
}

export const TodosFilter: FC<TodosFilterProps> = ({ active, handleFilter, todos }) => {
  const performed = useMemo(
    () => `${todos.length} / ${todos.filter((item) => item.isCompleted === true).length}`,
    [todos]
  )
  return (
    <div className={styles.filters}>
      <p>{performed}</p>
      <ul>
        {filterTodo.map((filterItem) => (
          <li
            onClick={() => handleFilter(filterItem)}
            className={active === filterItem ? styles.active : ''}
          >
            {filterItem}
          </li>
        ))}
      </ul>
    </div>
  )
}
