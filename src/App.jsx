import { useState } from "react";
import Wraper from "./Wraper";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");
  let colors = ["blue", "green", "red", "yellow", "purple", "orange"];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <Wraper colors={colors} color={color} setColor={setColor} />
    </div>
  );
}

export default App;
