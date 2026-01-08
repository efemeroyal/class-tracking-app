import React from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaBookOpen, FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import StatsCard from "./StatsCard";
import "../styles/StatsCards.css";

const stats = [
  {
    title: "Total Courses",
    amount: 3,
    icon: <FaBookOpen size={20} />,
    color: "#0a4da6",
    isGreen: "",
  },
  {
    title: "Total Students",
    amount: 125,
    icon: <FaUsers size={20} />,
    color: "#14b8a6",
    isGreen: "",
  },
  {
    title: "Sessions This Week",
    amount: 3,
    icon: <FaRegCalendarAlt size={20} />,
    color: "#16a34a",
    isGreen: "",
  },
  {
    title: "Avg. Attendance",
    amount: "85%",
    icon: <BsGraphUp size={20} />,
    color: "#16a34a",
    isGreen: "true",
  },
];

export default function StatsCards() {
  return (
    <div className="statCards">
      {stats.map((stat) => (
        <StatsCard
          title={stat.title}
          amount={stat.amount}
          icon={stat.icon}
          key={stat.title}
          color={stat.color}
          isGreen={stat.isGreen}
        />
      ))}
    </div>
  );
}
