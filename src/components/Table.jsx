import React from "react";
import styled from "styled-components";

import Flex from "./Flex";
import { COLORS } from "../constants/colors";

const Table = ({ products }) => {
  console.log(products);

  const row = products.map((product, index) => (
    <TableRow key={index} alignItems="center">
      <div>{product.descricao}</div>
      <div>{product.quantidade}</div>
      <div>R$ {product.media}</div>
      <div>R$ {product.total}</div>
    </TableRow>
  ));

  return (
    <Flex direction="column" flex="3" style={{marginRight: '30px'}}>
      <Title>Vendas</Title>
      <TableTag direction="column">
        <TableHeader>
          <div></div>
          <div>Quantidade</div>
          <div>Média</div>
          <div>Total</div>
        </TableHeader>
        {row}
      </TableTag>
    </Flex>
  );
};

const TableTag = styled(Flex)`
  background: ${COLORS.GRAY};
  padding: 1rem 2rem;
  width: 100%;
`;

const TableHeader = styled(Flex)`
  width: 100%;
  padding: 1rem;
  padding-top: 0;

  div {
    flex: 1;
    color: ${COLORS.WHITE};
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const TableRow = styled(Flex)`
  width: 100%;
  background: ${COLORS.GRAY100};
  padding: 1rem;
  margin-bottom: 1rem;
  div {
    color: ${COLORS.WHITE};
    flex: 1;
    width: 100%;
    margin-right: 1rem;
    font-size: 14px;
    font-weight: 300;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Title = styled.span`
  display: block;
  color: ${COLORS.WHITE};
  margin-bottom: 0.25rem;
`;

export default Table;
