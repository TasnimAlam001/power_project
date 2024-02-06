"use client";
import * as React from "react";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const data = [
  { label: "Opened", value: 273, color: "#086e09" },
  { label: "Processing", value: 236, color: "#36c0eb" },
  { label: "Solved", value: 374, color: "#7052f7" },
  { label: "Reopened", value: 310, color: "#2bede7" },
];

const sizing = {
  
  width: 600,
  height: 350,
};

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChars() {
  return (
    <div>
      <Card className="h-[595px] ">
        <CardContent className="p-0">
          <h1 className="p-6 text-2xl">Total Tickets</h1>
          <PieChart
            series={[
              {
                outerRadius: 150,
                innerRadius: 60,
                data,
                arcLabel: getArcLabel,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: "white",
                fontSize: 14,
              },
            }}
            {...sizing}
          /> <Divider></Divider>
          <Typography variant="body2">
            <div className="grid grid-cols-2 mt-7  pl-10">
              {data.map((name) => (
                <ol key={name.label} className="grid grid-cols-2">
                  <li className="list-disc  ">
                    {name.label} Tickets - {name.value}
                  </li>
                </ol>
              ))}
            </div>
          </Typography>
        </CardContent>
        <div className="mt-10 bg-slate-200 text-green-700 font-bold py-2 text-center">
          Total Tickets : {TOTAL}
        </div>
      </Card>
    </div>
  );
}
