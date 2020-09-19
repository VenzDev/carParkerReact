import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited,
  &:active,
  &:link,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:visited,
  &:active,
  &:link,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;
