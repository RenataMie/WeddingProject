import styled, {css} from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 65vw;
  position: relative;
  left: 125px;
  background: white;
  color:  #454B1B;
  overflow: hidden;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 50px;
  padding-right: 100px;

  @media only screen and (max-width: 700px) {
    padding: 35px;
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