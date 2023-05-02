import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #454B1B;
  height: 100vh;
`;

export const ButtonsContainer = styled.div`
  width: 100vw;
  position: absolute;
  top: 200px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1024px) {
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    top: 100px;
    left: 20px;
  }
`;

export const Button = styled.button`
  height: 56px;
  width: 200px;
  color: #454B1B;
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid #454B1B;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }

  @media only screen and (max-width: 1024px) {
    width: 100px;
    font-size: 0.8rem;
  }
`;