import {useState} from 'react'
import './index.css'

const SpeedometerFunctional = () => {
  const [speed, setSpeed] = useState(0)

  const accelerate = () => {
    if (speed < 200) {
      setSpeed(speed + 10)
    }
  }

  const applyBreak = () => {
    if (speed >= 10) {
      setSpeed(speed - 10)
    }
  }

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
        <button onClick={accelerate} type="button" className="acc">
          Accelerate
        </button>
        <button type="button" onClick={applyBreak} className="break">
          Apply Brake
        </button>
      </div>
    </div>
  )
}

export default SpeedometerFunctional
