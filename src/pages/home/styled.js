import styled from 'styled-components';
import photo from 'public/pic6.png';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background-image: url(${photo.src});
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;

  @media only screen and (max-width: 700px) {
    padding: 0;
    background-attachment: scroll;
    min-height: 45vh;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 450px;
  left: 300px;

  @media only screen and (max-width: 700px) {
    position: absolute;
    left: 40px;
    top: 150px;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  color: white;
  font-size: 5.5rem;

  @media only screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
