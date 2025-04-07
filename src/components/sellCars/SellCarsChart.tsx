"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  { name: "Mon", speed: 10 },
  { name: "Tue", speed: 8 },
  { name: "Wed", speed: 12 },
  { name: "Thu", speed: 23 },
  { name: "Fri", speed: 15 },
  { name: "Sat", speed: 18 },
  { name: "Sun", speed: 16 },
];

export default class SpeedChart extends PureComponent {
  render() {
    return (
      <div style={{ height: "400px", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F2F2F2"
              horizontal={true}
              vertical={false}
            />

            <XAxis dataKey="name" stroke="#fff" tick={false} />

            <YAxis
              domain={[0, 30]}
              stroke="#fff"
              tick={{ fill: "black", fontSize: 14 }}
              ticks={[0, 5, 10, 15, 20, 25, 30]}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#333",
                border: "none",
                color: "#fff",
              }}
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
            />

            <Bar
              dataKey="speed"
              fill="#FF6370"
              radius={[10, 10, 0, 0]}
              barSize={24}
            >
              {data.map((entry, index) => (
                <Label
                  key={index}
                  value={entry.name === "Thu" ? "23km/h" : ""}
                  position="top"
                  fill="#fff"
                  fontSize={14}
                  offset={10}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
