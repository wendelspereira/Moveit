import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const hasActiveChallenge = true

    return (
        <div className={styles.challengeBoxContainer}>

            {hasActiveChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>
                        Ganhe 400 XP
                    </header>
                    
                    <main>
                        <p>
                            <img src="icons/body.svg" alt="icon"/>
                        </p>
                            <strong>Novo desafio</strong>
                            <p>Levante e faça uma caminhada de 3 minutos.</p>
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

