import { AddTodo, DisplayTodo } from '../';
import { useAppSelector } from '../../store/hooks';

export const All = () => {
	const { todos } = useAppSelector((state) => state.todos);
	console.log(todos);
	return (
		<>
			<AddTodo />
			<DisplayTodo />
		</>
	);
};
