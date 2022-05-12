import React, { useState, useEffect } from "react";
import "./NewChat.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default ({ user, chatList, showNewChat, setShowNewChat }) => {
  console.log(showNewChat);
  const [list, setList] = useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Victor Duarte",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Carlão",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Victor Duarte",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Bonieky",
    },
  ]);

  const handleClose = () => {
    setShowNewChat(false);
  };

  return (
    <div className="newChat" style={{ left: showNewChat ? 0 : "-700px" }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backButton">
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat--headTitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
