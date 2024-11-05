import { useEffect, useState } from 'react'

import { StyledHeading } from './index.styled'

const texts = ["Fulfilling", "Fun", "Thoughtful"]
const TypeWriter = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [charIndex, setCharIndex] = useState(0)
    const typingSpeed = 80
    const pauseTime = 1500

    useEffect(() => {
        const currentText = texts[currentTextIndex]
        let typeTimeout

        if (!isDeleting && charIndex < currentText.length) {
            typeTimeout = setTimeout(() => {
                setDisplayedText((prev) => prev + currentText[charIndex])
                setCharIndex((prev) => prev + 1)
            }, typingSpeed)
        } else if (isDeleting && charIndex > 0) {
            typeTimeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1))
                setCharIndex((prev) => prev - 1)
            }, typingSpeed / 2)
        } else if (!isDeleting && charIndex === currentText.length) {
            typeTimeout = setTimeout(() => setIsDeleting(true), pauseTime)
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }

        return () => clearTimeout(typeTimeout);
    }, [charIndex, isDeleting, currentTextIndex, texts])

    return <StyledHeading>{displayedText}</StyledHeading>
}

export default TypeWriter