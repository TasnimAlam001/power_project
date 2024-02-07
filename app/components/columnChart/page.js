"use client";
import * as React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent } from "@mui/material";
// import { scaleOrdinal } from "d3-scale";
// import { schemeCategory10 } from "d3-scale-chromatic";
// const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: "Recharge Related",
    ticketCount: 530,
    
  },
  {
    name: "Voltage Related",
    ticketCount: 400,
    
  },
  {
    name: "Fuse Releted",
    ticketCount: 320,
    
  },
  {
    name: "Transformer Releted",
    ticketCount: 300,
    
  },
  {
    name: "Shutdown Releted",
    ticketCount: 220,
    
  },
  {
    name: "Load Releted",
    ticketCount: 130,
    
  },
  {
    name: "Query BPDB Releted",
    ticketCount: 130,
    
  },
];

export default function ColumnCharts() {
  return (
    <div>
    
      <Card className="h-[595px]">
        <CardContent className="p-0">
          <h1 className="p-6 text-2xl">
            Utility Wise Long Pending Opending Tickets
          </h1>
          
          <ComposedChart
            layout="vertical"
            width={600}
            height={460}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 70,
            }}
          >
            <CartesianGrid stroke="#E4E4E4" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="auto" />
            <Tooltip />
            <Legend />
            <Bar dataKey="ticketCount" barSize={35} fill="#CEB900" label={{ position: "right" }}
            >
 
            </Bar>
          </ComposedChart>
        </CardContent>
      </Card>
    </div>
  );
}
