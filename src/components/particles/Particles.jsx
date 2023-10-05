import React, { useRef, useEffect } from "react";

const MAX_PPS = 100; // pixels per second -- speed
const MIN_PPS = 20; // minimum speed
const MIN_SIZE = 10; // minimum size of square
const MAX_SIZE = 200; // maximum size of square
const SPAWN_RATE = 1000; // milliseconds between spawns
const MAX_SQUARES = 10;

export default function Particles() {
  const wrapperRef = useRef(null);
  let amount = 0;

  function createRandomX(size) {
    // 50% chance of spawning in the starting or last 80px of the screen
    if (Math.random() > 0.5) {
      // choose left or right
      if (Math.random() > 0.5) {
        // left
        return Math.floor(Math.random() * 80);
      } else {
        // right
        return window.innerWidth - Math.floor(Math.random() * 80);
      }
    } else {
      return Math.floor(Math.random() * (window.innerWidth - size));
    }
  }

  useEffect(() => {
    // disable if prefers-reduced-motion is set
    if (window.matchMedia("(prefers-reduced-motion)").matches) return;
    // if screen is less than 640px wide, disable
    if (window.innerWidth < 640) return;

    // randomly spawn squares that move up the screen
    const spawnSquare = () => {
      // dont spawn more than MAX_SQUARES
      if (amount >= MAX_SQUARES) return;

      // randomly choose speed and starting
      const speed = Math.floor(Math.random() * (MAX_PPS - MIN_PPS)) + MIN_PPS;

      // get window height and width and calculate duration
      const duration = window.innerHeight / speed;

      // create size and starting x and random rotation
      const size = Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE)) + MIN_SIZE;
      const x = createRandomX(size);
      const rotation = Math.floor(Math.random() * 360);

      // end rotation should be within 180 degrees of starting rotation
      const endRotation = rotation + Math.floor(Math.random() * 180) - 90;

      // create div element
      const square = document.createElement("div");
      square.style.left = x.toString() + "px";
      square.style.width = size.toString() + "px";
      square.style.height = size.toString() + "px";
      square.className = "bg-red-300";

      // opacity should be between 0.3 and 0.4
      square.style.opacity = (Math.random() * 0.1 + 0.3).toString();

      // add square to DOM
      wrapperRef.current.appendChild(square);
      amount++;

      square.animate(
        [
          {
            top: window.innerHeight.toString() + "px",
            transform: `rotate(${rotation}deg)`,
          },
          {
            top: (-size).toString() + "px",
            transform: `rotate(${endRotation}deg)`,
          },
        ],
        {
          duration: duration * 1000,
          iterations: 1,
        },
      );

      // remove square from DOM when animation is done
      setTimeout(() => {
        wrapperRef.current.removeChild(square);
        amount--;
      }, duration * 1000);
    };

    // spawn squares every 100ms
    const interval = setInterval(spawnSquare, SPAWN_RATE);

    // stop spawning squares when the component unmounts
    return () => {
      clearInterval(interval);
      // remove all squares
      document.querySelectorAll(".bg-red-300").forEach((square) => {
        document.body.removeChild(square);
      });
    };
  }, []);

  return (
    // wrapper div
    // hide overflow so squares don't show up on the sides
    <div
      className="absolute bottom-0 left-0 right-0 top-0 -z-50 overflow-hidden"
      ref={wrapperRef}
    />
  );
}
