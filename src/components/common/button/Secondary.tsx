export const Secondary: React.FC<{ props?: any }> = ({ props }) => {
	return (
		<button
			className="bg-gray-500 w-[124px] hover:bg-gray-600 focus:bg-gray-600 text-white font-semibold text-xs py-3 px-[26px] rounded font-montserrat outline-none flex justify-center items-center"
			{...props}
		>
			<img
				src="/assets/cancel.svg"
				alt="cancel"
				className="inline-block w-3 h-3 mr-[3px]"
			/>
			cancel
		</button>
	);
};
