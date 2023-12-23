import { useEffect, useState } from "react";

const GRID_WIDTH = 13;
const GRID_HEIGHT = 17;
const CELL_SIZE = 19;
const INITIAL_SNAKE = [
  { x: 2, y: 10 },
  { x: 3, y: 2.5 },
  { x: 3, y: 3 },
];
const INITIAL_DIRECTION = "up";
const INITIAL_APPLE = { x: 5, y: 6 };

const SnakeGame = ({
  isGameOver,
  isPaused,
  setPlayGame,
  setEatenApples,
  eatenApples,
}) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [apple, setApple] = useState(INITIAL_APPLE);
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    const interval = setInterval(moveSnake, 150);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, apple, isPaused]);

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
      event.preventDefault();
      setDirection(key.replace("arrow", ""));
    }
  };

  const moveSnake = () => {
    if (gameOver || isPaused) {
      return;
    }

    const head = { ...snake[0] };
    switch (direction) {
      case "up":
        head.y = (head.y - 1 + GRID_HEIGHT) % GRID_HEIGHT;
        break;
      case "down":
        head.y = (head.y + 1) % GRID_HEIGHT;
        break;
      case "left":
        head.x = (head.x - 1 + GRID_WIDTH) % GRID_WIDTH;
        break;
      case "right":
        head.x = (head.x + 1) % GRID_WIDTH;
        break;
      default:
        break;
    }

    const newSnake = [head, ...snake];

    if (isSnakeCollision(newSnake) || isBoundaryCollision(head)) {
      setGameOver(true);
      isGameOver(true);
      setPlayGame(false);
      return;
    }

    if (head.x === apple.x && head.y === apple.y) {
      setApple(getRandomApplePosition(newSnake));
      setEatenApples(eatenApples - 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const isSnakeCollision = (newSnake) => {
    const [head, ...body] = newSnake;
    return body.some((part) => part.x === head.x && part.y === head.y);
  };

  const isBoundaryCollision = (head) => {
    return (
      head.x < 0 || head.x >= GRID_WIDTH || head.y < 0 || head.y >= GRID_HEIGHT
    );
  };

  const getRandomApplePosition = (newSnake) => {
    const availableCells = Array.from(
      Array(GRID_WIDTH * GRID_HEIGHT).keys(),
    ).filter(
      (cell) => !newSnake.some((part) => part.x + part.y * GRID_WIDTH === cell),
    );
    const randomCell =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    const x = randomCell % GRID_WIDTH;
    const y = Math.floor(randomCell / GRID_WIDTH);
    return { x, y };
  };

  const renderCell = (row, col) => {
    const isSnake = snake.some((part) => part.x === col && part.y === row);
    const isApple = apple.x === col && apple.y === row;

    const cellStyle = {
      width: CELL_SIZE,
      height: CELL_SIZE,
      backgroundColor: isSnake ? "#43D9AD" : "",
      borderTopLeftRadius:
        isSnake && row === snake[0].y && col === snake[0].x ? "25%" : "",
      borderTopRightRadius:
        isSnake && row === snake[0].y && col === snake[0].x ? "25%" : "",
      borderBottomLeftRadius:
        isSnake && row === snake[0].y && col === snake[0].x ? "25%" : "",
      borderBottomRightRadius:
        isSnake && row === snake[0].y && col === snake[0].x ? "25%" : "",
      boxSizing: "border-box",
      position: "relative",
    };

    // const appleClass = isApple ? "animate-ping" : "";

    // const appleStyle = {
    //   width: "80%",
    //   height: "80%",
    //   backgroundColor: isApple ? "#43D9AD" : "",
    //   borderRadius: isApple ? "50%" : "0",
    //   position: "absolute",
    //   top: "50%",
    //   left: "50%",
    //   transform: "translate(-50%, -50%)",
    //   zIndex: isApple ? "1" : "auto",
    // };

    const tailStyle = {
      backgroundColor: isSnake ? "#43D9AD" : "",
      width: "50%",
      height: "50%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      display:
        isSnake &&
        row === snake[snake.length - 1].y &&
        col === snake[snake.length - 1].x
          ? "block"
          : "none",
    };

    const bodyStyle = {
      backgroundColor: isSnake ? "#43D9AD" : "",
      width: "10%",
      height: "10%",
      position: "absolute",
      top: "10%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      display:
        isSnake && !(row === snake[0].y && col === snake[0].x)
          ? "block"
          : "none",
    };

    return (
      <div
        className="flex items-center justify-center"
        key={`${row}-${col}`}
        style={cellStyle}
      >
        {isApple && (
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-codeline-name opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-codeline-name"></span>
          </span>
        )}
        {isSnake && !(row === snake[0].y && col === snake[0].x) && (
          <span className="relative" style={bodyStyle}></span>
        )}
        {isSnake &&
          row === snake[snake.length - 1].y &&
          col === snake[snake.length - 1].x && (
            <span className="relative" style={tailStyle}></span>
          )}
      </div>
    );
  };

  const grid = Array.from({ length: GRID_HEIGHT }, (_, row) =>
    Array.from({ length: GRID_WIDTH }, (_, col) => renderCell(row, col)),
  );

  return (
    <div>
      {gameOver ? (
        <div
          style={{ background: "rgba(1, 22, 39, 0.84)" }}
          className="absolute bottom-36 left-9 right-[13.2rem] py-2 text-center text-2xl uppercase text-codeline-name"
        >
          Game Over!
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${GRID_WIDTH}, ${CELL_SIZE}px)`,
          }}
        >
          {grid}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
