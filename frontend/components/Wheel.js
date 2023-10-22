import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'


export function Wheel(props) {
  const { current, moveClockwise, moveCounterClockwise} = props

  const handleClockWiseClick = () => {
    moveClockwise();
  };

  const handleCounterClockWiseClick = () => {
    moveCounterClockwise();
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog${current === 0 ? ' active' : ''}`} style={{ "--i": 0 }}>{ current === 0 ? "B" : ""}</div>
        <div className={`cog${current === 1 ? ' active' : ''}`} style={{ "--i": 1 }}>{ current === 1 ? "B" : ""}</div>
        <div className={`cog${current === 2 ? ' active' : ''}`} style={{ "--i": 2 }}>{ current === 2 ? "B" : ""}</div>
        <div className={`cog${current === 3 ? ' active' : ''}`} style={{ "--i": 3 }}>{ current === 3 ? "B" : ""}</div>
        <div className={`cog${current === 4 ? ' active' : ''}`} style={{ "--i": 4 }}>{ current === 4 ? "B" : ""}</div>
        <div className={`cog${current === 5 ? ' active' : ''}`} style={{ "--i": 5 }}>{ current === 5 ? "B" : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockWiseClick}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockWiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    current: state.wheel.current
  }
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)