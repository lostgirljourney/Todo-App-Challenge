import { Active, All, Completed, Heading, Tabs } from './components';
import { useAppSelector } from './store/hooks';

const App = () => {
	const tabName = useAppSelector((state) => state.tab.tab);

	return (
		<div className="max-w-full m-8">
			<Heading />
			<div className="max-w-[608px] w-full flex flex-col mx-auto">
				<Tabs />
				{tabName === 'All' ? (
					<All />
				) : tabName === 'Active' ? (
					<Active />
				) : (
					<Completed />
				)}
			</div>
		</div>
	);
};

export default App;
