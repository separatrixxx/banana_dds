import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
    id: 0,
    plan: 'None',
    duration: 'monthly',
    price: 0,
    datePlan: '',
    devices: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setUserPlan: (state, action) => {
      state.user.plan = action.payload
    },
    setUserDefault: (state) => {
      state.user = userData
    },
  },
});

export const { setUser, setUserPlan, setUserDefault } = userSlice.actions;

export default userSlice.reducer;
