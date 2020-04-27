import React from "react";

import { Dashboard } from "../container";
import { Sidebar, Flex } from "../components";

const DashboardPage = () => (
  <Flex>
    <Sidebar />
    <Dashboard />
  </Flex>
);

export default DashboardPage;
