import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100vw;
  padding: 15px 0px;
  background-color: rgba(215, 231, 233, 0.9);
`;

const StyledList = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledNavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: rgba(149, 183, 187, 0.9);
  color: rgba(38, 38, 39, 0.9);
  &.active {
    background-color: #b2bec3;
    color: black;
    font-weight: bold;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #ccc;
  }
`;

const ActiveNavLink = styled(NavLink)`
  color: #464040;

  &.active {
    color: #14747a;

    text-decoration: underline;
  }
`;

export { StyledList, StyledHeader, StyledNavItem, ActiveNavLink };
