import { Active, All, Completed, Footer, Heading, Tabs } from './components';
import { useAppSelector } from './store/hooks';

const App = () => {
	const tabName = useAppSelector((state) => state.tab.tab);

	return (
		<>
			<div className="max-w-full mx-8 mt-8 mb-12">
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
			<Footer />
		</>
	);
};

export default App;
