import { createSlice } from '@reduxjs/toolkit'
import { ServerInterface } from '../../interfaces/servers.interface';


const serversData: ServerInterface[] = [];

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
