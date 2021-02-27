import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const currentXpPercentage = (currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${currentXpPercentage}%` }}></div>
                {currentExperience > 0 &&
                    <span className={styles.currentExperience} style={{ left: `${currentXpPercentage}%` }}>
                        {currentExperience} xp
                    </span>
                }

            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}