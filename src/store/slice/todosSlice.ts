import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TodosState } from '../../utils';

const todos = localStorage.getItem('todos');

if (!todos) {
	localStorage.setItem('todos', JSON.stringify([]));
}

const initialState: TodosState | null = {
	todos: JSON.parse(todos || '[]')
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
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		toggleTodo: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.isCompleted = !todo.isCompleted;
			}
			localStorage.setItem('todos', JSON.stringify(state.todos));
		},
		deleteCompleted: (state) => {
			state.todos = state.todos.filter((todo) => !todo.isCompleted);
			localStorage.setItem('todos', JSON.stringify(state.todos));
		}
	}
});

export const { addTodo, removeTodo, toggleTodo, deleteCompleted } =
	todosSlice.actions;

export default todosSlice.reducer;
