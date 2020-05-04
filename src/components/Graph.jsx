import React from "react";
import styled from "styled-components";

import Flex from "./Flex";
import { COLORS } from "../constants/colors";

const Graph = ({ products }) => <GraphTag>Gráfico</GraphTag>;

const GraphTag = styled(Flex)`
  padding: 2rem;
  flex: 1;
  color: ${COLORS.WHITE};
`;

export default Graph;
