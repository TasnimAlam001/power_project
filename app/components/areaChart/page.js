"use client"
import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Card, CardContent } from "@mui/material";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "BPDP",
    uv: 300,
  },
  {
    name: "BREB",
    uv: 330,
  },
  {
    name: "DESCO",
    uv: 210,
  },
  {
    name: "DPDC",
    uv: 390,
  },
  {
    name: "WZPDCL",
    uv: 395,
  },
  {
    name: "NESCO",
    uv: 520,
  },
];
const cardinal = curveCardinal.tension(0.2);

export default function AreaCharts() {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: "-25px", top: "50%" }}>
        <span style={{ transform: "rotate(-90deg)", display: "block", textAlign: "center" }}>Ticket Count</span>
      </div>
      <Card className="h-[595px]">
        <CardContent className="p-0">
          <h1 className="p-6 text-2xl">
            Utility Wise Long Pending Opending Tickets
          </h1>
          <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 30, 
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1ACBC0" stopOpacity={0.95} />
                <stop offset="100%" stopColor="#D9D9D9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#1ACBC0"
              fill="url(#colorUv)"
              fillOpacity={1}
              dot={{ stroke: '#1ACBC0', fill: '#1ACBC0', r: 3 }}
            />
          </AreaChart>
        </CardContent>
      </Card>
    </div>
  );
}

