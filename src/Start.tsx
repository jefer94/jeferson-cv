import React from 'react'
import './Start.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

type StartValue = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5
type StartIndex = 1 | 2 | 3 | 4 | 5

type Props = {
  value: StartValue,
  index: StartIndex
}

const Start: React.FC<Props> = ({value, index}) => {
  const valueRes: 0 | 0.5 | 1 = (
    value <= index - 1 ?
      0 :
    value <= index - 0.5 ?
      0.5 :
      1
  )

  return (
    valueRes === 1 ?
      <FontAwesomeIcon icon={faStar} className={''} /> :
    valueRes === 0.5 ?
      <FontAwesomeIcon icon={faStarHalf} className={''} /> :
      <></>
  )
}

export default Start