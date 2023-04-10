// import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import {
  StyledList,
  StyledHeader,
  StyledNavItem,
  ActiveNavLink,
} from './Header.styled';

const menu = [
  { id: 'home', name: 'home', route: routes.HOME },
  { id: 'movies', name: 'movies', route: routes.MOVIES },
];

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledList>
          {menu &&
            menu.map(({ id, name, route }) => (
              <StyledNavItem key={id}>
                <ActiveNavLink to={route}>{name}</ActiveNavLink>
              </StyledNavItem>
            ))}
        </StyledList>
      </nav>
    </StyledHeader>
  );
};
