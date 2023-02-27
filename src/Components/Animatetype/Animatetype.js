import React from "react";
import Typewriter from "typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Animatetype = () => {
  const [text] = useTypewriter({
    // words: ["Hello", "From", "Typewriter", "Hook!"],
    words: ["Eat", "Sleep", "Code", "Repeat!"],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-[#000000] inline-block text-center">
        <Typewriter
          className="inline-block"
          options={{
            strings: [
              "Hellow motherfucker",
              "Hellow bosedike",
              "Hellow chutiya",
              "Hellow londay",
            ],
            autoStart: true,
            delay: 40,
            loop: true,
          }}
        />
        <span className="text-rose-700">{text}</span>
        <span className="text-lime-600">
          <Cursor
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Animatetype;
