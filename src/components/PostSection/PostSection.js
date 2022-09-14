import React from "react";
import "./PostSection.css";
import profilePic from "../../assets/profilePic/profile.png";
import PostsByDate from "./PostsByDate";
import data from "../Data/data.json";
const PostSection = () => {
  const postDates = [...Object.keys(data.posts_by_date)].sort(
    (a, b) => new Date(b) - new Date(a)
  );

  const formattedDates = postDates.map((date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  const dateRender = postDates.map((el) => data.posts_by_date[el]);

  return (
    <div className="post-container">
      <div className="status-container">
        <div className="status">
          <ul className="status-list">
            <li className="published">Published</li>
            <li className="scheduled">Scheduled</li>
            <li className="need-approval">Need Approval</li>
            <li className="error">Error</li>
            <li className="notes">Notes</li>
          </ul>
        </div>
        <div className="profile-pic">
          <img src={profilePic} alt="Profile pic" className="profile-img" />
        </div>
      </div>
      <div className="post-section">
        {dateRender.map((dates, i) => (
          <PostsByDate date={formattedDates[i]} dates={dates} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PostSection;
