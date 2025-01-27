/** @format */
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Statistics.css";

const data = [
  { name: "Coding", Hours: 1200 },
  { name: "DSA", Hours: 600 },
  { name: "Soft Skills", Hours: 500 },
  { name: "Git Commits", Hours: 450 },
];

const Statistics = () => {
  return (
    <section id="statistics" className="services-mf route">
      <div className="title-box text-center">
        <h3 className="title-a">STATISTICS</h3>
        <p className="subtitle-a">Skills like coding, DSA & soft skills</p>
        <div className="line-mf"></div>
      </div>
      <div className="statistics-chart">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#d1d1d1" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#333", fontSize: 12 }}
              axisLine={{ stroke: "#6F00FF" }}
              tickLine={{ stroke: "#6F00FF" }}
            />
            <YAxis
              tick={{ fill: "#333", fontSize: 12 }}
              axisLine={{ stroke: "#6F00FF" }}
              tickLine={{ stroke: "#6F00FF" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#6F00FF",
                color: "#fff",
                borderRadius: 5,
                border: "none",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar
              dataKey="Hours"
              fill="#6F00FF"
              radius={[10, 10, 0, 0]} /* Rounded corners */
              label={{
                position: "top",
                fill: "#333",
                fontSize: 12,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Statistics;
