import { useCallback, useState } from "react";
import { Button } from "./components/button";

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  // 🔁 This function will be memoized — won't re-create unless `clicks` changes
  const handleClick = useCallback(() => {
    setClicks((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Clicks: {clicks}</h2>
      <Button handleClick={handleClick} label="Click Me" />
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default App;
