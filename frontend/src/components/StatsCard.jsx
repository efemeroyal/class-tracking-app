import React from "react";
import "../styles/StatsCard.css";

export default function StatsCard({
  title,
  amount,
  icon,
  color,
  isGreen = "",
}) {
  return (
    <article style={{ "--color": color }}>
      <div className="statsCard__left">
        <small>{title}</small>
        <h2
          style={{
            color:
              isGreen === "true"
                ? "#16a34a"
                : isGreen === "false"
                ? "#ef4444"
                : "",
          }}
        >
          {amount}
        </h2>
      </div>
      <div className="statsCard__right">{icon}</div>
    </article>
  );
}
