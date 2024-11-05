import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // counterSlice에서 리듀서를 가져옴
import userReducer from "./userSlice";

// ===========================
// Redux Store 설정 2 (스토어 생성)
// ===========================
const store = configureStore({
  reducer: {
    counter: counterReducer, // 'counter'라는 상태 키를 counterReducer로 관리
    user: userReducer, // 'user'라는 상태 키를 userReducer로 관리
  },
});

// RootState 및 AppDispatch 타입 설정
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; // 스토어를 내보냄
