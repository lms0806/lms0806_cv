import { useEffect, useState } from "react";
import { initWasm, add, greet } from "./wasm";

function App() {
  const [msg, setMsg] = useState("");
  const [sum, setSum] = useState<number | null>(null);

  useEffect(() => {
    initWasm().then(() => {
      setMsg(greet("React"));
      setSum(add(3, 4));
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Rust + WASM + React</h1>
      <p>{msg}</p>
      <p>3 + 4 = {sum}</p>
    </div>
  );
}

export default App;