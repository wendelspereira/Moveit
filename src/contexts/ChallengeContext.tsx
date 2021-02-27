import { createContext, useState } from "react"
import challenges from "../../challenges.json"

interface challenge {
    type: 'eye' | 'body';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: challenge;
    experienceToNextLevel: number;
    resetChallenge: () => void;
    completChallenge: () => void;

}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function completChallenge() {
        if (!activeChallenge) {
            return
        }

        const { amount } = activeChallenge
        const newExperience = currentExperience + amount
        let experienceForNextLevel

        if (newExperience >= experienceToNextLevel) {
            levelUp()
            experienceForNextLevel = newExperience - experienceToNextLevel
        }
        
        setCurrentExperience(experienceForNextLevel)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallegesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallegesIndex]
        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }


    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                experienceToNextLevel,
                resetChallenge,
                completChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}
