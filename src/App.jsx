import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incrementAction, decrementAction} from './actions/counterTools'

export const App = () => {
  const counter = useSelector((state) => state.counterReducer.number)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(incrementAction())}>+</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrementAction())}>-</button>
    </div>
  )
}

