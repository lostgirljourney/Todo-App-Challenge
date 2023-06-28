import { useState } from 'react';
import { Input, Primary, Toast } from '../';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../store/slice/todosSlice';

export const AddTodo = () => {
	const dispatch = useAppDispatch();
	const [todo, setTodo] = useState<string>('');

	const showToast = () => {
		// Show the toast
		document.getElementById('myToast')?.classList.remove('hidden');
		setTimeout(function () {
			document.getElementById('myToast')?.classList.add('hidden');
		}, 5000);
	};

	return (
		<div className="flex justify-between mb-8">
			<Input
				props={{
					type: 'text',
					name: 'todo',
					value: todo,
					placeholder: 'add details',
					onInput: (e: any) => {
						setTodo(e.target.value);
					}
				}}
			/>
			<Primary
				props={{
					onClick: () => {
						todo ? (dispatch(addTodo(todo)), setTodo('')) : showToast();
					}
				}}
			/>
			<Toast message="Please enter a todo" />
		</div>
	);
};
