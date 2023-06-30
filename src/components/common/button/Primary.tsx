export const Primary: React.FC<{ props?: any }> = ({ props }) => {
	return (
		<button
			className="bg-[#2F80ED] h-14 hover:bg-blue-500 focus:bg-blue-500 text-white font-semibold text-sm py-5 px-10 rounded-xl shadow-button font-montserrat outline-none w-full md:max-w-[109px]"
			{...props}
		>
			Add
		</button>
	);
};
