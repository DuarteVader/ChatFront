import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.css";
import MessageItem from "./MessageItem";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default ({ user }) => {
  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const body = useRef();
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [list, setList] = useState([
    {
      author: 123,
      body: "bla bla bla",
    },
    { author: 123, body: "bla bla" },
    { author: 1234, body: "bla" },
    {
      author: 123,
      body: "bla bla bla",
    },
  ]);

  useEffect(() => {
    if (text === "") {
      resetTranscript();
    }
  }, [text]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleListing = () => {
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    resetTranscript();
    setText(transcript);
  };

  const handleSendClick = () => {};

  return (
    <div>
      <div className="chatWindow">
        <div className="chatWindow--header">
          <div className="chatWindow--headerinfo">
            <img
              className="chatWindow--avatar"
              src="https://www.w3schools.com/howto/img_avatar2.png"
              alt=""
            ></img>
            <div className="chatWindow--name">Victor Duarte</div>
          </div>
          <div className="chatWindow--headerbuttons">
            <div className="chatWindow--btn">
              <SearchIcon style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <AttachFileIcon style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </div>
        <div
          className="chatWindow--body"
          ref={body}
          style={{
            maxHeight: emojiOpen ? "430px" : false,
            minHeight: emojiOpen ? "430px" : false,
          }}
        >
          {list.map((item, key) => (
            <MessageItem key={key} data={item} user={user} />
          ))}
        </div>

        <div
          className="chatWindow--emojiarea"
          style={{ height: emojiOpen ? "200px" : "0px" }}
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            disableSearchBar
            disableSkinTonePicker
          />
        </div>
        <div className="chatWindow--footer">
          <div className="chatWindow--pre">
            <div
              className="chatWindow--btn"
              onClick={(e) => setEmojiOpen(false)}
              style={{ width: emojiOpen ? "40px" : "0px" }}
            >
              <CloseIcon style={{ color: "#919191" }} />
            </div>
            <div
              className="chatWindow--btn"
              onClick={(e) => setEmojiOpen(true)}
            >
              <InsertEmoticonIcon
                style={{ color: !emojiOpen ? "#919191" : "#009688" }}
              />
            </div>
          </div>
          <div className="chatWindow--inputarea">
            <input
              className="chatWindow--input"
              type="text"
              placeholder="Digite uma mensagem"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="chatWindow--pos">
            {text === "" ? (
              <div
                onClick={isListening ? stopHandle : handleListing}
                className="chatWindow--btn"
              >
                <MicIcon
                  style={{ color: isListening ? "#126ECE" : "#919191" }}
                />
              </div>
            ) : (
              <div onClick={handleSendClick} className="chatWindow--btn">
                <SendIcon style={{ color: "#919191" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
