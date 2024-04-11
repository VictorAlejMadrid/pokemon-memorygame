import styled from "styled-components";

export const CardWrapper = styled.div`
  width: ${(props) => (props.$cardCount >= 15 ? "100px" : "175px")};
  height: ${(props) => (props.$cardCount >= 15 ? "140px" : "245px")};
  background-image: url(${(props) => "/images/cards/" + props.$pokemon + ".png"});
  background-size: cover;

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 140px;
  }
`;
