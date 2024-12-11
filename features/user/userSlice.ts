import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../../interfaces/user.interface';


const userData: UserInterface = {
  user_id: -1,
  telegram_id: 0,
  username: '',
  subscription: {
      status: 'inactive',
      type: '',
      valid_until: null,
      available_zones: [],
      traffic_limit: 0,
      maximum_devices: 0,
      last_subcription_days: 0,
  },
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
    setUserDefault: (state) => {
      state.user = userData
    },
  },
});

export const { setUser, setUserDefault } = userSlice.actions;

export default userSlice.reducer;
