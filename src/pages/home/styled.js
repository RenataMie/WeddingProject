import styled from 'styled-components';
import photo from 'public/pic6.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background-image: url(${photo.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;

  @media only screen and (max-width: 700px) {
    padding: 0;
    background-size: cover;
    min-height: 40vh;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 250px;
  left: 300px;

  @media only screen and (max-width: 700px) {
    right: 100px;
    bottom: 50px;
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  color: white;
  font-size: 5.5rem;
`;
