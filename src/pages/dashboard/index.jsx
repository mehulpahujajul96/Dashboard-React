import React from "react";
import { Box, GridBox, PageBox, PageTitle } from "./dashboard.styled";
import BarChart from "./barChart";
import PieChart from "./pieChart";
const DashBoard = ({ data, pieData }) => {
  return (
    <div>
      <PageBox>
        <PageTitle>Dashboard</PageTitle>
      </PageBox>
      <GridBox>
        <Box>
          <BarChart data={data} />
        </Box>
        <Box>
          <PieChart pieData={pieData} />
        </Box>
      </GridBox>
    </div>
  );
};
export default DashBoard;
