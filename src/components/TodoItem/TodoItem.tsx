import { FC, useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

import { CompleteItem } from '../ui/CompleteItem'

import { ITodo } from '../../@types/ITodo'

import styles from './TodoItem.module.scss'

export interface sadsad extends ITodo {
  handleCompleteTodo: (str: string) => void
  handleRemoveTodo: (str: string) => void
}
export const TodoItem: FC<sadsad> = ({
  id,
  isCompleted,
  title,
  handleCompleteTodo,
  handleRemoveTodo,
}) => {
  const handleDelete = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation()
    handleRemoveTodo(id)
  }

  return (
    <div onClick={() => handleCompleteTodo(id)} className={styles.itemStyle}>
      <CompleteItem isCompleted={isCompleted} />
      <div className={styles.title}>
        <span className={`${isCompleted ? 'line-through' : ''}`}>{title}</span>
      </div>
      <AiOutlineDelete className={styles.delete} onClick={(event) => handleDelete(event)} />
    </div>
  )
}
