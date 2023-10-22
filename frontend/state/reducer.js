// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'
import { combineReducers } from 'redux'

const initialWheelState = { current: 0 }
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case(MOVE_CLOCKWISE): {
      if (state.current === 5) {
        return {
          current: 0
        }
      } else {
        return {
          current: state.current + 1
        }
      }
  }
    case(MOVE_COUNTERCLOCKWISE): {
      if (state.current === 0) {
        return {
          current: 5
        }
      } else {
        return {
          current: state.current - 1
        }
      }
    }
}
  return state
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
