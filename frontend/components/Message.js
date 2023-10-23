import React from 'react'
import {connect} from 'react-redux'

export function Message(props) {
  const {message} = props;
  return <div id="message">{message}</div>
}

const mapStateToProps = state => {
  return {
    message: state.infoMessage.message
  }
}

export default connect(mapStateToProps)(Message)