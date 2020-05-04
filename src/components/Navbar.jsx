import React from "react";
import styled from "styled-components";

import Flex from "./Flex";
import { COLORS } from "../constants/colors";

const Navbar = () => (
  <NavbarTag justifyContent="space-between" alignItems="center">
    <Title>Painel de Controle</Title>
    <List>
      <li>Suporte</li>
      <li>Minha conta</li>
    </List>
  </NavbarTag>
);

const NavbarTag = styled(Flex)`
  padding: 3rem 2rem;
  width: 100%;
`;

const Title = styled.h3`
  color: ${COLORS.WHITE};
  margin: 0;
`;

const List = styled.ul`
  list-style-type: none;
  color: ${COLORS.WHITE};
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin-left: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 14px;
  }
`;

export default Navbar;
