import { Link } from "react-router-dom"
import logo from '../../images/logo.webp';
import CustomLink from '../CustomLink';
import { Logo, NavMenu, NavWrapper } from './styled';

export default function Navbar() {
  return (
    <NavMenu>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <NavWrapper>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </NavWrapper>
    </NavMenu>
  )
}
