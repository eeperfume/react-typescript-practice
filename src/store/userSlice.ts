import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 초기 상태 타입 정의
interface UserState {
  name: string;
  age: number | null; // 나이는 null일 수 있습니다.
}

// 초기 상태
const initialState: UserState = {
  name: "",
  age: null, // 초기값은 null로 설정
};

// user slice 생성
const userSlice = createSlice({
  name: "user", // slice의 이름
  initialState, // 초기 상태
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload; // 사용자의 이름 설정
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload; // 사용자의 나이 설정
    },
    clearUser: (state) => {
      state.name = ""; // 이름 초기화
      state.age = null; // 나이 초기화
    },
  },
});

// 액션과 리듀서 내보내기
export const { setName, setAge, clearUser } = userSlice.actions;
export default userSlice.reducer;
