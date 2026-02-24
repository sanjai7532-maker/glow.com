import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: [], // Store multiple profiles
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.profiles.push(action.payload); // Immer allows direct push
    },
    removeProfile: (state, action) => {
      state.profiles = state.profiles.filter(
        profile => profile.id !== action.payload
      );
    },
    clearProfiles: (state) => {
      state.profiles = [];
    }
  },
});

export const { addProfile, removeProfile, clearProfiles } = profileSlice.actions;
export default profileSlice.reducer;
