import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	tab: 'All'
};

export const tabsSlice = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		setTab: (state, action: PayloadAction<string>) => {
			state.tab = action.payload;
		}
	}
});

export const { setTab } = tabsSlice.actions;

export default tabsSlice.reducer;
