import React, { useState, useEffect } from "react";
const words = ["a developer", "a designer", "a creator", "Christopher Ferraro"];

export default function About() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 && 
      index !== words.length - 1 && 
      !reverse 
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                150, parseInt(Math.random() * 200)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
      <section>
          <h1 class="title">About Me</h1>
        <div id="about-me">
            <img src="src/assets/ProfilePic_Cropped_Square.png" alt="Profile" id="pro-pic"/>
            <h1 class="type-effect">
              I am {`${words[index].substring(0, subIndex)}`}
            </h1>
          <p>
              I am an aspiring Full Stack Web Developer with a background in Graphic Design.
              Graphic Design and web design were my inspiration to learn how to code websites. As of now, my design skills are most commonly
              used to create logos and branding for start-up businesses and making custom ski graphics and t-shirt designs.
              In my free time, I chase waves around the east coast year-round and enjoy snowboarding the mountains of Colorado and Vermont in the winter.
              I am also a part of a rugby club in the area.
              I have a passion for creating and problem solving, and I am excited to bring that passion to the world of web development.
          </p>
        </div>
      </section>
  );
}
