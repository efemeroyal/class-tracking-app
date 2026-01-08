import React from "react";
import { FaChartLine, FaPlay, FaPlus } from "react-icons/fa";
import ActionCard from "./ActionCard";
import "../styles/ActionCards.css";

const actions = [
  {
    title: "Start Session",
    description: "Generate QR Code & start class",
    icon: <FaPlay size={20} />,
    bgColor: "var(--primary)",
    border: "#0a4da6",
  },
  {
    title: "View Reports",
    description: "Attendance Analytics",
    icon: <FaChartLine size={22} />,
    bgColor: "var(--accent)",
    border: "#14b8a6",
  },
  {
    title: "Create Course",
    description: "Add new course",
    icon: <FaPlus size={22} />,
    bgColor: "var(--success)",
    border: "#16a34a",
  },
];

export default function ActionCards() {
  return (
    <div className="actionCards">
      {actions.map(({ title, description, icon, bgColor, border }) => (
        <ActionCard
          key={title}
          title={title}
          description={description}
          icon={icon}
          bgColor={bgColor}
          border={border}
        />
      ))}
    </div>
  );
}
