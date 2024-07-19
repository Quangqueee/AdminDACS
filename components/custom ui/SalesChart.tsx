"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const SalesChart = ({ data }: { data: any[] }) => {
  // Thêm hàm format để định dạng số trên trục Y
  const formatNumber = (value: number) => {
    return (
      (value / 1000000).toLocaleString("vi-VN", { minimumFractionDigits: 0 }) +
      "tr"
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        className="w-full h-full"
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatNumber} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;