import React from "react";

import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Flex from "../components/Flex";
import Graph from "../components/Graph";

const DashboardContainer = () => {
  const products = [
    {
      descricao: "Vendas no dia",
      quantidade: 70,
      media: 1000.5,
      total: 7035.0,
    },
    {
      descricao: "Vendas na semana",
      quantidade: 350,
      media: 5100.0,
      total: 35035.0,
    },
    {
      descricao: "Vendas no mês",
      quantidade: 1000,
      media: 10000.75,
      total: 75035.0,
    },
    {
      descricao: "Vendas no ano",
      quantidade: 900,
      media: 10000.5,
      total: 500035.0,
    },
    {
      descricao: "Vendas no total",
      quantidade: 900,
      media: 10000.5,
      total: 500035.0,
    },
  ];

  return (
    <Flex direction="column">
      <Navbar />
      <Flex width="100%" style={{ padding: "3rem 2rem" }}>
        <Table products={products} />
        <Graph />
      </Flex>
    </Flex>
  );
};

export default DashboardContainer;
