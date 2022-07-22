import {Component} from 'react'
import './index.css'

export default class Speedometer extends Component {
  state = {
    speed: 0,
  }

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  break = () => {
    const {speed} = this.state
    if (speed >= 10) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1>Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button onClick={this.accelerate} type="button" className="acc">
            Accelerate
          </button>
          <button onClick={this.break} type="button" className="break">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
