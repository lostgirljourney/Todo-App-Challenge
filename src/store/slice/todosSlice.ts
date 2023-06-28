import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from '../../utils';

const initialState: TodosState = {
	todos: []
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.todos.push({
				id: uuidv4(),
				todo: action.payload,
				isCompleted: false
			});
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.isCompleted = !todo.isCompleted;
			}
		}
	}
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
