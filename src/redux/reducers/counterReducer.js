import { DECREASE_COUNTER, INCREASE_COUNTER, RESET_COUNTER, _666 } from "../constants/counterConstants"

const defaultState = 0

export const counterReducer = (state = defaultState, {type, payload}) => {
  switch (type) {
    case INCREASE_COUNTER:  return state + 1
    case DECREASE_COUNTER:  return state - 1
    case RESET_COUNTER:     return state = payload
    case _666:     return state = payload
    default:          return state = defaultState
  }
}