import { createSlice } from '@reduxjs/toolkit'
import { ServerItem } from '../../interfaces/servers.interface';


const serversData: ServerItem[] = [];

export const serversSlice = createSlice({
  name: 'servers',
  initialState: {
    servers: serversData,
  },
  reducers: {
    setServers: (state, action) => {
      state.servers = action.payload
    },
  },
});

export const { setServers } = serversSlice.actions;

export default serversSlice.reducer;
