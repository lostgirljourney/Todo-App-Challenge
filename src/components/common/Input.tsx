export const Input: React.FC<{ props?: any }> = ({ props }) => {
	return (
		<input
			className="w-full max-w-[476px] h-14 rounded-xl border-[#BDBDBD] border-solid border focus:border-[#BDBDBD] outline-none font-montserrat placeholder:text-[#828282] text-sm py-5 px-3"
			{...props}
		/>
	);
};
