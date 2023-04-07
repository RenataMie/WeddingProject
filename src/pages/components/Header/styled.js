import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  opacity: 0.85;
  background: white;
  color: #454B1B;
  width: 100vw;
  justify-content: flex-end;
  padding: 1.5rem 2rem;
  position: fixed;

  @media only screen and (max-width: 700px) {
    padding: 1rem;
    opacity: 0.8;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding-right: 100px;

  @media only screen and (max-width: 700px) {
    padding-right: 35px;
    gap: 20px;
  }
`;

export const Link = styled.a`
  font-size: 1.3rem;
  font-weight: bolder;
  cursor: pointer;
  position: relative;
  color: inherit;

  :after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #454B1B;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  :hover:after { 
    width: 100%; 
    left: 0; 
  }

  :hover {
    opacity: 0.7;
  }
`

export const PresenceButton = styled.button`
  font-size: 1rem;
  /* font-weight: bolder; */
  background-color: #454B1B;
  color: white;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    border: 2px solid #454B1B;
    background-color: white;
    color: #454B1B;
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.7rem;
    border-radius: 2px;
  }
`
export const BurguerButton = styled.button`
  cursor: pointer;
  padding: 0;
  border: 0;
  background: none;
  color: white;
`