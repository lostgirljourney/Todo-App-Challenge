import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleTodo } from '../../store/slice/todosSlice';

export const AllTodos = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector((state) => state.todos.todos);

	return (
		<>
			{todos.length > 0 ? (
				todos.map((todo) => (
					<div key={todo.id} className="mb-7 flex items-center w-full">
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
				))
			) : (
				<>
					<img
						src="/assets/no-data.svg"
						alt="empty"
						className="w-1/2 mx-auto"
					/>
					<p className="font-montserrat font-medium text-lg text-center mt-4">
						no todos
					</p>
				</>
			)}
		</>
	);
};
