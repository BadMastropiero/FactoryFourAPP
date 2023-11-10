import { NavbarProps } from './Nabvar.interface';
import { StyledNavbar, StyledNavbarContent } from './Nabvar.style';

export default function Navbar({ title }: NavbarProps) {
  return (
    <StyledNavbar>
      <StyledNavbarContent>
        <h3>{title}</h3>
      </StyledNavbarContent>
    </StyledNavbar>
  );
}
