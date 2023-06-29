import { useAppSelector } from '../../store/hooks';
import { AllTodos } from './AllTodos';
import { ActiveTodos } from './ActiveTodos';
import { CompletedTodos } from './CompletedTodos';

export const DisplayTodo = () => {
	const tabName = useAppSelector((state) => state.tab.tab);

	if (tabName === 'All') {
		return <AllTodos />;
	} else if (tabName === 'Active') {
		return <ActiveTodos />;
	} else if (tabName === 'Completed') {
		return <CompletedTodos />;
	}
};
