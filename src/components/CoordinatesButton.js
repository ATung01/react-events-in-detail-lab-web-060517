// Code CoordinatesButton Component Here
import React from 'react'


export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }
  findCords = (event) => {
    this.setState({ x: event.clientX, y: event.clientY })
    let answer = [this.state.x, this.state.y]
    this.props.onReceiveCoordinates(answer)
  }


  render() {
    return <button onClick={this.findCords}>{}</button>
  }
}
