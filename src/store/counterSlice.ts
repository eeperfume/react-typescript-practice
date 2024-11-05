import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 초기 상태 타입 정의
interface CounterState {
  value: number;
}

// 초기 상태
const initialState: CounterState = {
  value: 0,
};

// ===========================
// Redux Store 설정 1 (counter slice 생성)
// ===========================
const counterSlice = createSlice({
  name: "counter", // slice의 이름
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload; // action.payload 만큼 증가
    },
  },
});

// 액션과 리듀서 내보내기
export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
