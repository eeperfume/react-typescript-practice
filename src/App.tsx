import { useState } from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

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

  // ===========================
  // Redux Store 설정 5 (Counter 컴포넌트 연결)
  // ===========================
  return (
    <div>
      <Greeting name="Lee" age={31} />
      <Counter />
      <UserProfile />
    </div>
  );
}

export default App;
