import { Link as ChakraLink, type LinkProps } from '@chakra-ui/react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';

interface NavLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children, ...rest }: NavLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <RouterNavLink to={to}>
      <ChakraLink
        display="flex"
        alignItems="center"
        p={2}
        borderRadius="md"
        fontWeight="medium"
        color={isActive ? 'text.primary' : 'text.secondary'}
        bg={isActive ? 'bg.muted' : 'transparent'}
        _hover={{
          bg: 'bg.muted',
          color: 'text.primary',
        }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </RouterNavLink>
  );
};

export default NavLink;