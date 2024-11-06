import React, { useState } from "react";
import styled from "styled-components";

// Sample data
const data = [
    { review: "This is review 1" },
    { review: "This is review 2" },
    { review: "This is review 3" },
    { review: "This is review 4" },
    { review: "This is review 5" },
    { review: "This is review 6" },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start with the second item centered

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    return (
        <CarouselContainer>
            <CarouselWrapper>
                {data.map((module, index) => {
                    // Determine position relative to the current index
                    const position = getPosition(index, currentIndex, data.length);
                    return (
                        <ReviewCard key={index} position={position}>
                            <p>{module.review}</p>
                        </ReviewCard>
                    );
                })}
            </CarouselWrapper>
            <ButtonContainer>
                <Arrow onClick={prevSlide}>&#10094;</Arrow>
                <Arrow onClick={nextSlide}>&#10095;</Arrow>
            </ButtonContainer>
        </CarouselContainer>
    );
};

// Helper function to calculate card position
const getPosition = (index, currentIndex, length) => {
    if (index === currentIndex) return "center"; // Centered card
    if (index === (currentIndex - 1 + length) % length) return "left"; // Left card (wraps around)
    if (index === (currentIndex + 1) % length) return "right"; // Right card (wraps around)
    return "hidden"; // All other cards are hidden
};

// Styled Components
const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
`;

const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 100%;
`;

const ReviewCard = styled.div`
    display: ${({ position }) => (position === "hidden" ? "none" : "flex")};
    justify-content: center;
    align-items: center;
    width: ${({ position }) => (position === "center" ? "840px" : "840px")};
    height: ${({ position }) => (position === "center" ? "365px" : "262px")};
    margin: 0 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease, height 0.5s ease;

    opacity: ${({ position }) => (position === "center" ? 1 : 0.3)};
    position: absolute;
    left: ${({ position }) => {
        if (position === "left") return "25%";
        if (position === "right") return "75%";
        return "50%";
    }};
    transform: ${({ position }) =>
        position === "center"
            ? "translateX(-50%)"
            : position === "left"
            ? "translateX(-100%)"
            : "translateX(0)"};
    z-index: ${({ position }) => (position === "center" ? 2 : 0)};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60px;
    position: relative;
    bottom: -30px;
`;

const Arrow = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #333;
    &:hover {
        color: #000;
    }
`;
export default Carousel;
