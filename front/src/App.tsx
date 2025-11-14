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
      <h1>PÁGINA INICIAL</h1>
      <h2>Contador exemplo de useState: {count}</h2>
      <Button
        className="hover:bg-fuchsia-600 cursor-pointer"
        onClick={handleClick}
      >
        Click Me
      </Button>
    </>
  );
}

export default App;
