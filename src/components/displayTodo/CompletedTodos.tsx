import { useEffect } from 'react';
import { Danger, Modal } from '..';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	toggleTodo,
	removeTodo,
	deleteCompleted
} from '../../store/slice/todosSlice';

export const CompletedTodos = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state) => state.todos.todos);
	const completedTodos = todos.filter((todo) => todo.isCompleted);

	const deleteTodos = () => {
		document.getElementById('modal')?.classList.remove('hidden');
	};

	useEffect(() => {
		window.addEventListener('click', (e) => {
			if (e.target === document.getElementById('modal')) {
				document.getElementById('modal')?.classList.add('hidden');
			}
		});
	}, []);

	return (
		<>
			{completedTodos.length > 0 ? (
				<div className="flex flex-col">
					{completedTodos.map((todo) => (
						<div
							key={todo.id}
							className="mb-7 flex items-center justify-between w-full"
						>
							<div className="flex items-center justify-between">
								<input
									id={todo.id}
									type="checkbox"
									checked={todo.isCompleted}
									className="mr-2 g-gray-200 hover:bg-gray-300 cursor-pointer w-6 h-6 border-3 border-amber-500 focus:outline-none rounded"
									onChange={() => dispatch(toggleTodo(todo.id))}
								/>
								<label
									htmlFor={todo.id}
									className={`font-montserrat font-medium text-lg${
										todo.isCompleted ? ' line-through' : ''
									}`}
								>
									{todo.todo}
								</label>
							</div>
							<img
								src="/assets/trash-gray.svg"
								alt="trash"
								className="inline-block w-6 h-auto mr-2 cursor-pointer"
								onClick={() => dispatch(removeTodo(todo.id))}
							/>
						</div>
					))}
					<div className="w-full flex justify-end">
						<Danger
							props={{
								onClick: deleteTodos
							}}
						/>
					</div>
				</div>
			) : (
				<>
					<img
						src="/assets/no-data.svg"
						alt="empty"
						className="w-1/2 mx-auto"
					/>
					<p className="font-montserrat font-medium text-lg text-center mt-4">
						no completed todos
					</p>
				</>
			)}
			<Modal
				cancelBtnProps={{
					onClick: () =>
						document.getElementById('modal')?.classList.add('hidden')
				}}
				delBtnProps={{
					onClick: () => {
						dispatch(deleteCompleted());
						document.getElementById('modal')?.classList.add('hidden');
					}
				}}
			/>
		</>
	);
};
