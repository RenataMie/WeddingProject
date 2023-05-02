import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  background: white;
  color: #454B1B;
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 700px) {
    width: 70%;
    opacity: 0.9;
    flex-direction: column;
    gap: 50px;
  }
`;

export const Info = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 0;

  h2 {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
  }
`
