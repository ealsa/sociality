import React from "react";
import "./Card.css";
import errImg from "../../assets/no-post-image.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { MdBlock } from "react-icons/md";
import {
  AiOutlineCheck,
  AiOutlineShareAlt,
  AiOutlineHeart,
  AiOutlineRetweet,
  AiOutlineEye,
} from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import { VscComment } from "react-icons/vsc";
import { BiLike } from "react-icons/bi";

const Card = ({
  pubDate,
  statusColorCode,
  accountChannel,
  cardMessage,
  cardImage,
  postLink,
}) => {
  const imageErrorHandler = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = errImg;
  };

  const iconsBySocialPlatform = (socialPlatform) => {
    switch (true) {
      case socialPlatform === "facebook" ||
        socialPlatform === "instagrambusiness":
        return (
          <div className="social-platform-icons">
            <span className="social-platform-icons-nums">
              <BiLike size={20} /> <span>0</span>
            </span>
            <span className="social-platform-icons-nums">
              <VscComment size={20} /> <span>0</span>
            </span>
            <span className="social-platform-icons-nums">
              <AiOutlineShareAlt size={20} /> <span>0</span>
            </span>
            <span className="social-platform-icons-nums">
              <AiOutlineEye size={20} /> <span>0</span>
            </span>
          </div>
        );
      case socialPlatform === "twitter":
        return (
          <div className="social-platform-icons">
            <span className="social-platform-icons-nums">
              <AiOutlineHeart size={20} /> <span>0</span>
            </span>
            <span className="social-platform-icons-nums">
              <AiOutlineRetweet size={20} /> <span>0</span>
            </span>
            <span className="social-platform-icons-nums">
              <AiOutlineShareAlt size={20} /> <span>0</span>
            </span>
            <span className="social-platform-icons-nums">
              <AiOutlineEye size={20} /> <span>0</span>
            </span>
          </div>
        );

      default:
        return;
    }
  };

  const cardStatus = {
    0: "need-approval-color", // #f7bf38
    1: "scheduled-color", // #3ac183
    2: "publishing-color", //
    3: "published-color", // #acacac
    4: "error-color",
  }; // #fb6450;

  const iconByChannel = (statusCode) => {
    switch (true) {
      case 0 === statusCode:
        return (
          <div className="card-icon-container">
            <AiOutlineCheck size={17} className="card-action-icons" />
            <BsTrash size={17} className="card-action-icons" />
            <CgMoreO size={17} className="card-action-icons" />
          </div>
        );
      case 1 === statusCode:
        return (
          <div className="card-icon-container">
            <MdBlock size={17} className="card-action-icons" />
            <BsTrash size={17} className="card-action-icons" />
            <CgMoreO size={17} className="card-action-icons" />
          </div>
        );

      case 3 === statusCode:
        return (
          <div className="card-icon-container">
            <BsTrash size={17} className="card-action-icons" />
            <CgMoreO size={17} className="card-action-icons" />
          </div>
        );

      default:
        return;
    }
  };

  const cardStatusIcons = {
    facebook: <FaFacebookF size={20} />,
    twitter: <FaTwitter size={20} />,
    instagrambusiness: <FaInstagram size={20} />,
  };

  const formattedPubDate = new Date(pubDate)
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace("at", "-");
  return (
    <div className="card">
      <a className="post-link" href={postLink} target="_blank" rel="noreferrer">
        <div className={`card-social ${cardStatus[statusColorCode]} `}>
          {cardStatusIcons[accountChannel]}
        </div>
      </a>
      <div className="card-content">
        <div className="card-date">
          <span>{formattedPubDate}</span>
          {iconByChannel(statusColorCode)}
        </div>
        <div className="card-message">{cardMessage}</div>
        <img
          className="card-img"
          onError={imageErrorHandler}
          src={cardImage || errImg}
          alt="card"
        />

        {iconsBySocialPlatform(accountChannel)}
      </div>
    </div>
  );
};

export default Card;
