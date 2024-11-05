import { useState } from "react";
import Greeting from "./components/Greeting";

// ===========================
// JSX 타입 지정
// ===========================
const box: JSX.Element = <div></div>;
const button: JSX.Element = <button></button>;

function App() {
  // ===========================
  // state 타입 지정 (둘 이상의 타입 지정이 필요한 경우 Generic 문법 사용)
  // ===========================
  let [age, setAge] = useState<string | number>(20);

  return (
    <div>
      <Greeting name="Lee" age={31} />
    </div>
  );
}

export default App;
