import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { increment, incrementByAmount } from "../store/counterSlice";

// ===========================
// Redux Store 설정 4 (Counter 컴포넌트 생성)
// ===========================
const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
    </div>
  );
};

export default Counter;
