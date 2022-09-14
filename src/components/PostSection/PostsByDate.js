import React from "react";
import "./PostsByDate.css";
import Card from "../Card/Card";

const PostsByDate = ({ date, dates }) => {
  return (
    <div className="posts-by-date-container">
      <span className="post-date">{date}</span>
      <div className="card-container">
        {dates.map((dateCard, i) => (
          <Card
            pubDate={dateCard.published_at}
            statusColorCode={dateCard.status}
            accountChannel={dateCard.account.channel}
            cardMessage={dateCard.entry.message}
            cardImage={dateCard.entry?.image}
            postLink={dateCard.account.link}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsByDate;
