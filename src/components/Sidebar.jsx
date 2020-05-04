import React from "react";
import styled from "styled-components";

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
  </SidebarTag>
);

const SidebarTag = styled.div`
  width: 25%;
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

const Title = styled.h2`
  color: ${COLORS.WHITE};
`;

export default Sidebar;
