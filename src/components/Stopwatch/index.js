// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, istimerRunning: false}

  renderminuts = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onStart = () => {
    const {istimerRunning} = this.state
    if (istimerRunning === false) {
      this.setState({istimerRunning: true})
      this.timerID = setInterval(this.runClock, 1000)
    }
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStop = () => {
    const {istimerRunning} = this.state
    if (istimerRunning === true) {
      this.setState({istimerRunning: false})
      clearInterval(this.timerID)
    }
  }

  onReset = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerID)
  }

  render() {
    const displayTime = `${this.renderminuts()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <div className="cont">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="watch-cont">
            <div className="tim-img-cont">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="running-time">{displayTime}</h1>
            <div className="buttons-cont">
              <button
                type="button"
                onClick={this.onStart}
                className="start button"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStop}
                className="Stop button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onReset}
                className="Reset button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
