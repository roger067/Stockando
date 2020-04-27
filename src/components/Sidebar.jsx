import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants/colors";

const Sidebar = () => <SidebarTag>Teste</SidebarTag>;

const SidebarTag = styled.div`
  width: 25%;
  height: 100vh;
  background: ${COLORS.GRAY};
`;

export default Sidebar;
