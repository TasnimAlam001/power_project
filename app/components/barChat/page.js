"use client"
import { Card, CardContent, Divider, Typography } from "@mui/material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


export default function BarCharts() {
  const data = [
    {
      name: "BPDB",
      Solved: 1000,
      Opened: 800,
     
    },
    {
      name: "BREB",
      Solved: 2700,
      Opened: 1600,
     
    },
    {
      name: "DESCO",
      Solved: 300,
      Opened: 200,
     
    },
    {
      name: "DPDC",
      Solved: 1400,
      Opened: 1650,
      
    },
    {
      name: "WZPDCL",
      Solved: 1400,
      Opened: 1000,
      
    },
    {
      name: "NESCO",
      Solved: 490,
      Opened: 800,
      
    },
    
  ];
  return (
    <div>
      <Card className="h-[595px]">
        <CardContent className="p-0">
          <h1 className="p-6 text-2xl">Utility Wise Tickets ( Opened and Solved)</h1>
          <BarChart
            width={650}
            height={400}
            data={data}
           
            margin={{
              top: 55,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="" />
            <XAxis   dataKey="name" categoryGapRatio={0.4}/>
            <YAxis />
            <Tooltip />

            <Legend  />
            
            <Bar dataKey="Opened" fill="#04984A" />
            <Bar dataKey="Solved" fill="#3382EF" />
          </BarChart>
        </CardContent>
        
      </Card>
    </div>
  );
}
