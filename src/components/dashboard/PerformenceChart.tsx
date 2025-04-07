import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

interface PerformenceChartProps {
  title: string;
  progressColor?: string;
}

export default class PerformenceChart extends PureComponent<PerformenceChartProps> {
  renderCustomLabel = () => {
    const { title } = this.props;
    return (
      <text
        x={100}
        y={100}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {title || "0%"}
      </text>
    );
  };

  render() {
    const { title, progressColor } = this.props;

    const percentage = parseFloat(title) || 0;
    const remaining = 100 - percentage;

    const data = [
      { name: "Progress", value: percentage },
      { name: "Remaining", value: remaining },
    ];

    const COLORS = [progressColor || "#F4F5F9", "#2F2F2F"];

    return (
      <div style={{ width: "200px", height: "200px" }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={40}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            label={this.renderCustomLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    );
  }
}
