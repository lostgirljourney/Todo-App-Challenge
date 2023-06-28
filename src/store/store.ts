import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slice/todosSlice';
import tabsReducer from './slice/tabsSlice';

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		tab: tabsReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
