import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Array of texts
const textArray = [
  "Slide 1: This is the first text",
  "Slide 2: Here comes the second text",
  "Slide 3: This is the third text",
  "Slide 4: Finally, the fourth text"
];

// Keyframes for the slide-in and slide-out animations
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

// Styled components
const SliderContainer = styled.div`
  position: relative;
  width: 300px;
  height: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  position: absolute;
  font-size: 1.5em;
  opacity: 0;
  transition: opacity 0.5s ease;
  animation: ${props => (props.animate ? slideIn : slideOut)} 0.5s forwards;
`;

const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  font-size: 1em;
  cursor: pointer;
`;

const TextSlider = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleNext = () => {
    setAnimate(false); // Trigger slide-out animation
    setTimeout(() => {
      setIndex((index + 1) % textArray.length); // Move to next text
      setAnimate(true); // Trigger slide-in animation
    }, 500); // Wait for slide-out animation to finish
  };

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((index - 1 + textArray.length) % textArray.length); // Move to previous text
      setAnimate(true);
    }, 500);
  };

  return (
    <SliderContainer>
      <Text key={index} animate={animate}>
        {textArray[index]}
      </Text>
      <div>
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </SliderContainer>
  );
};

export default TextSlider;
