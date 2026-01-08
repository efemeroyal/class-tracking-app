import React from "react";
import "../styles/ActionCard.css";

export default function ActionCard({
  title,
  description,
  icon,
  bgColor,
  border,
}) {
  return (
    <article style={{ "--borderC": border }}>
      <div className="actionIcon" style={{ "--bgColor": bgColor }}>
        {icon}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
