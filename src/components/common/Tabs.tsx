import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTab } from '../../store/slice/tabsSlice';

const Tab: React.FC<{
	tab: string;
	active: boolean;
}> = ({ tab, active }) => {
	const dispatch = useAppDispatch();
	return (
		<div
			className={`${
				!active && 'cursor-pointer'
			} flex items-center flex-col w-[89px]`}
			onClick={() => dispatch(setTab(tab))}
		>
			<p className="text-[#333] text-sm font-semibold font-montserrat mb-[18px]">
				{tab}
			</p>
			<div
				className={`h-1 rounded-t w-full 
					${active ? 'bg-[#2F80ED]' : 'bg-transparent'}
				`}
			/>
		</div>
	);
};

export const Tabs = () => {
	const tabName = useAppSelector((state) => state.tab.tab);
	return (
		<div className="w-full">
			<div className="flex justify-around">
				{['All', 'Active', 'Completed'].map((tab) => (
					<Tab tab={tab} active={tab === tabName} key={tab} />
				))}
			</div>
			<div className="mb-[18px] w-full h-0 border-b border-solid border-[#BDBDBD]" />
		</div>
	);
};
