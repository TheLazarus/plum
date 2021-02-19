import React from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [reply, setReply] = React.useState("");

  const commands = [
    {
      command: "hello my name is :name",
      callback: (name) => setReply(`Hello ${name}, nice to meet ya!`),
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>I HEARD :- {transcript}</p>
      <p>REPLY :- {reply}</p>
    </div>
  );
}

export default App;
