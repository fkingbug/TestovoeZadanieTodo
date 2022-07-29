import React, { FC, useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { ITodo } from '../../../@types/ITodo'

import styles from './Search.module.scss'

export interface SearchProp {
  handleTodos: (value: ITodo) => void
}

export const Search: FC<SearchProp> = ({ handleTodos }) => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  const handleInputValue = () => {
    if (searchValue) {
      const searchItem: ITodo = {
        id: `${new Date()}_${Math.random()}`,
        title: searchValue,
        isCompleted: false,
      }
      handleTodos(searchItem)
      setSearchValue('')
    }
  }
  return (
    <div className={styles.search} onKeyPress={(e) => e.key === 'Enter' && handleInputValue()}>
      <IoAdd onClick={handleInputValue} />
      <input value={searchValue} onChange={onChangeInput} />
    </div>
  )
}
