import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  color: #454B1B;
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 700px) {
    /* background: #454B1B;
    color: white; */
    opacity: 0.9;
    flex-direction: column;
    gap: 50px;
  }
`;

export const Info = styled.div`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`
