import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const donations = useLoaderData();
  const totalDonations = donations.reduce(
    (prev, current) => prev + current.donation_amount,
    0
  );

  const donateItems = JSON.parse(localStorage.getItem("donations"));

  const myDonationTotal = donateItems?.reduce(
    (prev, current) => prev + current.donation_amount,
    0
  );
  

  const data = [
    { name: "Total Donations", value: totalDonations },
    { name: "My Donation", value: myDonationTotal },
  ];

  const COLORS = ["#FA585A", "#2B1B9A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="mb-10">
      <div className="h-[80vh]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center">
        <p>
          <span className="mr-3">Total Donation</span> <span className="px-20 py-1 bg-[#FA585A] mr-5"></span>
        </p>
        <p>
          <span className="mr-3">Your Donation</span> <span className="px-20 py-1 bg-[#2B1B9A]"></span>
        </p>
      </div>

      
    </div>
  );
};

export default Statistics;
