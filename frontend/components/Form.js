import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  const {newQuestion, newTrueAnswer, newFalseAnswer, inputChange, postQuiz} = props

  const onChange = evt => {
   inputChange(evt)
  }

  const onSubmit = evt => {
    evt.preventDefault()
    postQuiz(newQuestion, newTrueAnswer, newFalseAnswer)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={newQuestion} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={newTrueAnswer} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      {newQuestion.trim() === "" || newTrueAnswer.trim() === "" || newFalseAnswer.trim() === "" ? <button id="submitNewQuizBtn" onSubmit={onSubmit} disabled>Submit new quiz</button> : <button id="submitNewQuizBtn" onSubmit={onSubmit}>Submit new quiz</button>}
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect( mapStateToProps, actionCreators)(Form)
