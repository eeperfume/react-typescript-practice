// ===========================
// Props 타입 정의
// ===========================
type GreetingProps = {
  name: string;
  age: number;
};

// ===========================
// 컴포넌트 생성
// ===========================
const Greeting = ({ name, age }: GreetingProps): JSX.Element => {
  return (
    <h1>
      Hello, {name}! Your age is {age}
    </h1>
  );
};

export default Greeting;
