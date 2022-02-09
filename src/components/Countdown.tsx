import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeOut: NodeJS.Timeout
const COUNTDOWN_TIME = 0.05

export function Countdown() {

    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(COUNTDOWN_TIME * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('')
    const [leftSeconds, rightSeconds] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        setIsActive(true)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()            
        }
    }, [isActive, time])

    function resetCountdown() {
        clearTimeout(countdownTimeOut)
        setIsActive(false)
        setTime(COUNTDOWN_TIME * 60)
    }

    
    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{leftMinute}</span>
                    <span>{rightMinute}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{leftSeconds}</span>
                    <span>{rightSeconds}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    className={styles.countdownButton}
                    disabled
                >
                    Ciclo finalizado!
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button type="button"
                                onClick={resetCountdown}
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                                Abandonar um ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    onClick={startCountdown}
                                    className={styles.countdownButton}>
                                    Iniciar um ciclo
                                </button>
                            )
                        }
                    </>

                )}
        </div>
    )
}