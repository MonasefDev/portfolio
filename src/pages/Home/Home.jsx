import { Helmet } from "react-helmet";
import dev from "../../developer.json";
import "./home.scss";
import { GiSnake } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import { SiAmazongames } from "react-icons/si";
import SnakeGame from "../../components/SnakeGame/SnakeGame";
import { useEffect, useState } from "react";
import ArrowKeyButtons from "../../components/SnakeGame/ArrowButtons";
import { Link, useNavigate } from "react-router-dom";
function Home({ isMenuOpen }) {
  const [playGame, setPlayGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [eatenApples, setEatenApples] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [wellDone, setWellDone] = useState(false);

  const history = useNavigate();
  useEffect(() => {
    if (eatenApples === 0) {
      setPlayGame(!playGame);
      setWellDone(true);
      setTimeout(() => {
        history("/about-me");
      }, 2000);
    }
  }, [eatenApples]);
  const snakeFood = (
    <>
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-codeline-name opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-codeline-name"></span>
      </span>
    </>
  );
  const repeatedSnakeFood = Array(eatenApples).fill(snakeFood);
  return (
    <>
      <Helmet>
        <title>Home | MoNaSeF Abdelkarim</title>
      </Helmet>
      <main className={`hello ${isMenuOpen ? "hidden" : "flex"}`}>
        <div className="css-blurry-gradient-blue" data-aos="zoom-in"></div>
        <div className="css-blurry-gradient-green" data-aos="zoom-in"></div>
        <section className="hero z-10" data-aos="fade-right">
          <div className="head">
            <span>Hi all, I am</span>
            <h1 className="text-3xl lg:text-5xl">{dev.name}</h1>
            <h2>{`>${dev.role}`}</h2>
          </div>

          <div id="info">
            <span className="action hidden lg:block">
              {"// complete the game to continue"}
            </span>
            <span className=" hidden lg:block">
              {"// you can also see it on my Github page"}
            </span>
            <span>{"// find my profile on Github:"}</span>
            <div className="code flex flex-wrap space-x-2">
              <span className="identifier">const</span>
              <span className="variable-name">githubLink</span>
              <span className="operator">=</span>
              <a
                className="string"
                href="'https://github.com/' + config.public.dev.contacts.social.github.user"
              >
                {`https://github.com/${dev.contacts.social.github.user}`}
              </a>
            </div>
          </div>
        </section>

        {/* game section  */}
        <section
          className="relative z-50 hidden  h-full w-full items-center justify-start lg:flex"
          data-aos="fade-left"
        >
          <div
            className="z-50 flex items-center justify-center gap-2 rounded-lg border-2 border-[#010e0e] px-8 py-7"
            style={{
              width: "500px",
              height: "475px",
              background:
                "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)",
              boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
              backdropFilter: "blur(32px)",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(1, 22, 39, 0.84)",
                boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
              }}
              className="flex h-full w-3/5 items-start justify-center rounded-md pt-1 "
            >
              {playGame ? (
                <SnakeGame
                  isGameOver={setIsGameOver}
                  setPlayGame={setPlayGame}
                  isPaused={isPaused}
                  eatenApples={eatenApples}
                  setEatenApples={setEatenApples}
                />
              ) : isGameOver ? (
                <div
                  data-aos="zoom-in"
                  style={{ background: "rgba(1, 22, 39, 0.84)" }}
                  className="absolute bottom-36 left-9 right-[13.2rem] py-2 text-center text-2xl uppercase text-codeline-name"
                >
                  GAME OVER
                </div>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col text-7xl text-codeline-name">
                    <GiSnake />
                    <SiAmazongames />
                  </div>
                </div>
              )}
              {wellDone && (
                <div
                  data-aos="zoom-in"
                  style={{ background: "rgba(1, 22, 39, 0.84)" }}
                  className="absolute bottom-36 left-9 right-[13.2rem] py-2 text-center text-2xl uppercase text-codeline-name"
                >
                  WELL DONE
                </div>
              )}
              {/* play game button */}
              {playGame && (
                <button
                  onClick={() => {
                    setIsPaused((prev) => !prev);
                  }}
                  className="text-p1 absolute bottom-16 rounded-lg bg-a1 px-4 py-2 font-semibold outline-none"
                >
                  {isPaused ? "play" : "pause"}
                </button>
              )}
              {!playGame && (
                <button
                  onClick={() => {
                    setPlayGame(!playGame);
                    setWellDone(false);
                    setEatenApples(10);
                  }}
                  className="text-p1 absolute bottom-16 rounded-lg bg-a1 px-4 py-2 font-semibold outline-none"
                >
                  {isGameOver ? "play-again" : "play-game"}
                </button>
              )}
            </div>
            {/* arrow key button  */}
            <div className="h-full w-2/5 rounded-lg">
              <div
                style={{ background: "rgba(1, 20, 35, 0.19)" }}
                className="rounded-lg p-2"
              >
                <p className="text-white">
                  {`//use keyboard`} <br /> {`//arrow to play`}
                </p>
                <div className="mt-5">
                  <ArrowKeyButtons />
                </div>
              </div>
              {/* snake food section  */}
              <div className="mt-8 p-2">
                <p className="text-white">{`//food left`}</p>
                <div className="mt-4 grid grid-cols-5 items-center  justify-evenly gap-4">
                  {repeatedSnakeFood}
                </div>
              </div>
              <Link
                to={"/about-me"}
                onClick={() => {
                  setPlayGame(false);
                  setEatenApples(10);
                }}
                className="absolute bottom-10 right-5 rounded-xl border border-white px-5 py-2  text-white outline-none"
              >
                skip
              </Link>
            </div>
            <span className="border-red absolute left-2 top-2 rounded-full border border-[#114944] text-[#052130]">
              <RiCloseCircleFill />
            </span>
            <span className="border-red absolute right-2 top-2 rounded-full border border-[#114944] text-[#052130]">
              <RiCloseCircleFill />
            </span>
            <span className="border-red absolute bottom-2 left-2 rounded-full border border-[#114944] text-[#052130]">
              <RiCloseCircleFill />
            </span>
            <span className="border-red absolute bottom-2 right-2 rounded-full border border-[#114944] text-[#052130]">
              <RiCloseCircleFill />
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
