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
    
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}) {
const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    
    function levelUp(){
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallegesIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallegesIndex]
        setActiveChallenge(challenge)
    }

    return (
        <ChallengesContext.Provider 
        value={{ 
            level, 
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge,
            activeChallenge
        }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}
