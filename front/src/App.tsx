import { useState } from "react";
import { Button } from "./components/ui/button";
import "@/styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Type something..."
          className="input-field"
        />
        <input
          type="text"
          placeholder="Type something..."
          className="input-field"
        />
        <input
          type="text"
          placeholder="Type something..."
          className="input-field"
        />
      </form>
    </>
  );
}

export default App;
