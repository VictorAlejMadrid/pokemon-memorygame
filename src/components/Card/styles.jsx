import styled from "styled-components";

export const CardWrapper = styled.div`
  pointer-events: ${(props) => props.$clickable ? 'auto' : 'none'};
  position: relative;
  width: ${(props) => (props.$cardCount >= 15 ? "100px" : "175px")};
  height: ${(props) => (props.$cardCount >= 15 ? "140px" : "245px")};
  transition: transform 0.6s ease;
  transform-style: preserve-3d;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 140px;
  }
`;

export const CardFrontSide = styled.div`
  position: absolute;
  width: ${(props) => (props.$cardCount >= 15 ? "100px" : "175px")};
  height: ${(props) => (props.$cardCount >= 15 ? "140px" : "245px")};
  background-image: url("/images/cards/back.png");
  background-size: cover;
  backface-visibility: hidden;
  transform: ${(props) => (props.$clicked ? `rotateY(180deg)` : `rotateY(0deg)`)};
  transition: transform 0.5s ease;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 140px;
  }
`;

export const CardBackSide = styled.div`
  width: ${(props) => (props.$cardCount >= 15 ? "100px" : "175px")};
  height: ${(props) => (props.$cardCount >= 15 ? "140px" : "245px")};
  position: absolute;
  backface-visibility: hidden;
  background-image: url(${(props) => "/images/cards/" + props.$pokemon + ".png"});
  background-size: cover;
  transform: ${(props) => (props.$clicked ? `rotateY(0deg)` : `rotateY(-180deg)`)};
  transition: transform 0.5s ease;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 140px;
  }
`;
