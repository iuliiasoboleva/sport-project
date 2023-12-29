import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { NavList } from './styled';

export default function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <NavList isActive={isActive}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </NavList>
  )
}
