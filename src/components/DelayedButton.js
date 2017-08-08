// Code DelayedButton Component Here

// Code CoordinatesButton Component Here
import React from 'react'


export default class DelayedButton extends React.Component {

  constructor(){
    super()

  }

  persisting = (event) => {
  event.persist()
  setTimeout(() =>
    this.props.onDelayedClick(event)
    )
  }

  render() {
      return <button onClick={this.persisting}></button>
  }
}
