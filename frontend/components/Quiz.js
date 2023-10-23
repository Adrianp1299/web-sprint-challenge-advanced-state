import React from 'react'
import { connect } from 'react-redux'
import { selectAnswer, fetchQuiz, postAnswer } from '../state/action-creators'

export function Quiz(props) {
  const { answer, selectAnswer, question, answerA, answerB, fetchQuiz, postAnswer, quesitionId, answerAId, answerBId } = props

  const handleAnswerA = () => {
    selectAnswer('A');
  }

  const handleLoad = () => {
    if (question === "What is closure?") {
      fetchQuiz();
      return false
    }
    else {
      return true
    }
  }

  const handleAnswerB = () => {
    selectAnswer('B');
  }

  const answerId = () => {
    if (answer === "A") {
      return answerAId
    } else if (answer === "B") {
      return answerBId
    } else {
      return null
    }
  }

  const handleSubmit = () => {
    postAnswer(quesitionId, answerId());
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        handleLoad() &
        true ? (
          <>
            <h2>{question}</h2>

            <div id="quizAnswers">
              <div className={`answer${answer === 'A' ? ' selected' : ''}`} onClick={handleAnswerA}>
                {answerA}
                <button>
                { answer === "A" ? "SELECTED" : "Select" }
                </button>
              </div>

              <div className={`answer${answer === 'B' ? ' selected' : ''}`} onClick={handleAnswerB}>
                {answerB}
                <button>
                { answer === "B" ? "SELECTED" : "Select" }
                </button>
              </div>
            </div>

            {answer === "" ? <button id="submitAnswerBtn" disabled>Submit answer</button> : <button id="submitAnswerBtn" onClick={handleSubmit} >Submit answer</button> }
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    answer: state.selectedAnswer.answer,
    question: state.quiz.question,
    answerA: state.quiz.answerA,
    answerB: state.quiz.answerB,
    quesitionId: state.quiz.quizId,
    answerAId: state.quiz.answerAId,
    answerBId: state.quiz.answerBId,

  }
}

export default connect(mapStateToProps, {selectAnswer, fetchQuiz, postAnswer})(Quiz)