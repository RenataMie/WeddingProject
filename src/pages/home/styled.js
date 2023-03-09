import styled from 'styled-components';
import photo from 'public/pic6.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 70vh;
  background-image: url(${photo.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.85;

  @media only screen and (max-width: 700px) {
    padding: 0;
    background-size: cover;
    min-height: 40vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  position: relative;
  right: 250px;

  @media only screen and (max-width: 700px) {
    right: 100px;
    bottom: 50px;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  color: white;
  font-size: 3rem;
`;
