import React from "react";
import styled from "styled-components";
import {
  faCashRegister,
  faShoppingCart,
  faTruck,
  faChartLine,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Flex from "./Flex";
import { COLORS } from "../constants/colors";
import profile from "../images/profile.png";

const Sidebar = () => (
  <SidebarTag>
    <Title>Stockando</Title>
    <Profile alignItems="center" direction="column">
      <img src={profile} alt="profile" />
      <span>Leo Viggiano</span>
    </Profile>
    <LinkList direction="column">
      <div>
        <FontAwesomeIcon icon={faCashRegister} />
        <span>Painel de Controle</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Produtos</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faTruck} />
        <span>Distribuidores</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faChartLine} />
        <span>Receita</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Sair da conta</span>
      </div>
    </LinkList>
  </SidebarTag>
);

const SidebarTag = styled.div`
  width: 20%;
  height: 100vh;
  padding: 3rem 2rem;
  background: ${COLORS.GRAY};
  box-shadow: rgba(41, 39, 95, 0.05) 0px 5px 6px;
`;

const Profile = styled(Flex)`
  padding: 3rem 0;

  img {
    width: 50%;
  }

  span {
    font-weight: bold;
    color: ${COLORS.WHITE};
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;

const LinkList = styled(Flex)`
  color: ${COLORS.WHITE};

  div {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }

  svg {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  span {
    font-size: 14px;
    margin-left: 1rem;
  }
`;

const Title = styled.h2`
  color: ${COLORS.WHITE};
`;

export default Sidebar;
