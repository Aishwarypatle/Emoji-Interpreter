import './App.css'
import { useState } from 'react';


let emoList = {
  "😂": "Laughing",
  "😎": "Smart",
  "😴": "Sleepy",
  "😣": "Pathetic",
  "🙄": "Confused",
  "😘": "Love",
  "😙": "Kiss",
  "😉": "Wink",
  "😍": "Excited",
  "😓": "Sad",
  "✋": "High-Five",
  "😑": "Annoyed"
};

let emoKeys = Object.keys(emoList);

export default function App() {

  let [describeEmo, setEmoDescribe] = useState("");

  function emojiHandler() {
    let input = event.target.value;

    let describeEmo = emoList[input];

    if (describeEmo === undefined) {
      describeEmo = "Database don't have this particular Emoji,Please try again with different Emoji";
    }
    setEmoDescribe(describeEmo);
  }

  function emojiClickEvent(emoji) {
    setEmoDescribe(emoList[emoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter </h1>
      <input
        placeholder="Please input any Emoji from the given List"
        onChange={emojiHandler}
      />
      <div className="describeText">{describeEmo}</div>

      <div className="emojiDiv">
        {emoKeys.map((emoji) => (
          <span className="emojies" onClick={() => emojiClickEvent(emoji)}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
