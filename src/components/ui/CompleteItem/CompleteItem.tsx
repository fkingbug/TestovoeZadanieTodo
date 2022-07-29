import React, { FC } from 'react'

import { BsCheckLg } from 'react-icons/bs'

import styles from './CompleteItem.module.scss'

export interface CompleteProp {
  isCompleted: boolean
}

export const CompleteItem: FC<CompleteProp> = ({ isCompleted }) => {
  return <div className={styles.btn}>{isCompleted && <BsCheckLg />}</div>
}
