import React, { useEffect, useRef, useState } from 'react'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const DEFAULT_TIME_LENGTH = 45 * 60 * 1000 // 45 minutes in milliseconds
// const DEMO_TIME_LENGTH = 2 * 1000 // 2 seconds in milliseconds

export type TimerProps = {
  time?: number
} & React.ComponentProps<'div'>

function Timer(props: TimerProps) {
  let { time: initialTime } = props
  initialTime ??= DEFAULT_TIME_LENGTH

  const startTime = useRef<number | null>(null)
  const intervalId = useRef<number | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    if (timeLeft < 1) {
      if (isRunning) {
        if (intervalId.current) {
          clearInterval(intervalId.current)
        }
        console.debug('Time\'s up!')
  
        setIsRunning(false)
      }
    }
  }, [timeLeft, isRunning])

  function toggleTimer() {
    if (isRunning) {
      // stop timer and reset
      if (intervalId.current) {
        clearInterval(intervalId.current)
      }
      setTimeLeft(initialTime!)
    } else {
      // start timer
      startTime.current = Date.now()
      // const st = startTime.current
      intervalId.current = setInterval(() => {
        const endTime = startTime.current! + initialTime!

        // const oldSeconds = Math.floor(timeLeftWrapper.value / 1000)
        const currentSeconds = Math.ceil((endTime - Date.now()) / 1000)

        setTimeLeft(currentSeconds * 1000)
        // if (currentSeconds < oldSeconds) {
        // }

        console.debug({ currentSeconds })
      }, 100)
    }

    setIsRunning(!isRunning)
  }

  return <div className='timerWrapper'>
    <div className='timerContainer'>
      <div className='timerControlsWrapper'>
        <div className='timerControls'>
          { isRunning 
            ? <FontAwesomeIcon icon={faPause} onClick={() => toggleTimer()} /> 
            : <FontAwesomeIcon icon={faPlay} onClick={() => toggleTimer()} />
          }
        </div>
      </div>
      <div className='timerDisplayWrapper'>
        <div className='timerDisplay'>
          { toMinutesSeconds(timeLeft).toString() }
        </div>
      </div>
    </div>
  </div>
}

export default Timer

// -------------- UTILITIES ------------------
type MinutesSecondsMeasure = {
  minutes: number
  seconds: number
  toString: () => string
}

function toMinutesSeconds(s: number) {
  s /= 1000
  const res = {
    minutes: Math.floor(s / 60),
    seconds: s % 60,
    toString: () => `${res.minutes}:${res.seconds < 10 ? '0' : ''}${res.seconds}`,
  } as MinutesSecondsMeasure

  return res
}