// ❗ You don't need to add extra reducers to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_SELECTED_ANSWER, SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types'
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

const initialQuizState = {quizId: "", question: "What is closure?", answerAId:"", answerA: "A Function", answerBId: "", answerB: "An Elephant"}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case(SET_QUIZ_INTO_STATE): {
      return {
        quizId: action.payload.quiz_id,
        question: action.payload.question,
        answerAId: action.payload.answers[0].answer_id,
        answerA: action.payload.answers[0].text,
        answerBId: action.payload.answers[1].answer_id,
        answerB: action.payload.answers[1].text

      }
    }
  }
  return state
}

const initialSelectedAnswerState = {answer: ""}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case(SET_SELECTED_ANSWER): {
      return {
        answer: `${action.payload}`,
      }
    }
  }
  return state
}

const initialMessageState = {message:''}
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case(SET_INFO_MESSAGE): {
      return {
        message: `${action.payload}`
      }
    }
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case(INPUT_CHANGE): {
      return{
        ...state,
        [action.payload.target.id]: `${action.payload.target.value}`   
      }
    }
    case(RESET_FORM): {
      return {
        newQuestion: '',
        newTrueAnswer: '',
        newFalseAnswer: ''
      }
    }
  }
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
