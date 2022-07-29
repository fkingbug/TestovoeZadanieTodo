import React, { FC, useMemo, useState } from 'react'
import { ITodo } from '../../@types/ITodo'

import styles from './TodosFilter.module.scss'
const filterTodo: string[] = ['All', 'Active', 'Complete']

export interface FilterProp {
  active: string
  handleFilter: (filterItem: string) => void
  todos: ITodo[]
}

export const TodosFilter: FC<FilterProp> = ({ active, handleFilter, todos }) => {
  const len = useMemo(() => todos.filter((item) => item.isCompleted === true).length, [todos])

  return (
    <div className={styles.filters}>
      <p>{`${todos.length} / ${len}`}</p>
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
