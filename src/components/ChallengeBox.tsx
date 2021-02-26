import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const {activeChallenge} = useContext(ChallengesContext)
   
    return (
        <div className={styles.challengeBoxContainer}>

            {activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>
                        Ganhe {activeChallenge.amount} XP
                    </header>
                    
                    <main>
                        <p>
                            <img src={`icons/${activeChallenge.type}.svg`}alt="icon"/>
                        </p>
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>
                            Falhei
                        </button>

                        <button type="button" className={styles.challengeSuccessButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Finalize uma cliclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </div>
                )}
        </div >
    )
}

