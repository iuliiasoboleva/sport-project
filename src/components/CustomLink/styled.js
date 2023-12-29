import styled from 'styled-components';

export const NavList = styled.li`
  &:hover {
    background-color: #777;
  }
  
  background-color: ${props => props.isActive ? "#555" : ""};
`;
