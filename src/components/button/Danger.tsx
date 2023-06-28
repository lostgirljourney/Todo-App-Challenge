export const Danger = () => {
	return (
		<button className="bg-[#EB5757] w-[124px] hover:bg-red-600 focus:bg-red-600 text-white font-semibold text-xs py-3 px-[26px] rounded font-montserrat outline-none flex justify-center items-center">
			<img
				src="/assets/trash.svg"
				alt="trash"
				className="inline-block w-3 h-auto mr-[3px]"
			/>
			delete all
		</button>
	);
};
