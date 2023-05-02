import styled from 'styled-components';

export const Container = styled.div`
  background: #454B1B;
  color: white;
  padding: 5rem;
  margin: 0 auto;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 1.3rem;

  @media only screen and (max-width: 700px) {
   padding: 2rem;
   font-size: 1rem;;
  }
`;
