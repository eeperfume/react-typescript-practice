import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setName, setAge, clearUser } from "../store/userSlice";

const UserProfile = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value)); // 입력값으로 이름 업데이트
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(Number(e.target.value))); // 입력값으로 나이 업데이트
  };

  return (
    <div>
      <h1>User Profile</h1>
      <input type="text" placeholder="Name" value={user.name} onChange={handleNameChange} />
      <input type="number" placeholder="Age" value={user.age || ""} onChange={handleAgeChange} />
      <button onClick={() => dispatch(clearUser())}>Clear User</button>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;
