// import ListGroup from "./components/listGroup";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const close = () => {
    setAlertVisibility(false);
  };
  return (
    <div>
      {alertVisible && <Alert onclose={close}>Alert</Alert>}
      <Button color="success" handleThis={() => setAlertVisibility(true)}>
        MyButton
      </Button>
    </div>
  );
}

type sho = {
  showBox: Boolean;
};
// const items = ["Apple", "Banana", "Carrot"];
// const handle = (item: string) => {
//   console.log(item);
// };
// <ListGroup items={items} heading={"fruits"} onSelectItem={handle} />

// function useEffectTrail({ showBox }: sho) {
//   return (
//     <div>
//       <h1>Hello</h1>
//       {showBox && <MouseTracker />}
//     </div>
//   );
// }

// function MouseTracker() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMove = (e: MouseEvent) => {
//       console.log("moving");
//       setPos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, []);

//   return (
//     <p>
//       Mouse at: {pos.x}, {pos.y}
//     </p>
//   );
// }

//different from useeffect in that it is made sure to run
// before anything is painted on the screen
function TooltipUseLayoutEffect() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipStyle, setTooltipStyle] = useState({
    top: 0,
    left: 0,
    opacity: 0,
  });

  useLayoutEffect(() => {
    if (!buttonRef.current || !tooltipRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();

    setTooltipStyle({
      top: buttonRect.bottom + 5,
      left: buttonRect.left,
      opacity: 1,
    });
  }, []);

  return (
    <>
      <button ref={buttonRef}>Hover me</button>
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          background: "black",
          color: "white",
          padding: "5px",
          borderRadius: "3px",
          pointerEvents: "none",
          transition: "opacity 0.3s",
          ...tooltipStyle,
        }}
      >
        Tooltip text
      </div>
    </>
  );
}

export default TooltipUseLayoutEffect;
