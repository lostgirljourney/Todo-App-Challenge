export const Toast: React.FC<{
	message: string;
}> = ({ message }) => {
	return (
		<div
			id="myToast"
			className="hidden fixed right-10 bottom-10 px-5 py-4 border-r-8 border-blue-500 bg-white drop-shadow-lg"
		>
			<p className="text-sm font-montserrat">
				<span className="mr-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white font-extrabold">
					i
				</span>
				{message}
			</p>
		</div>
	);
};
