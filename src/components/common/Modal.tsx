export const Modal: React.FC<{
	delBtnProps?: any;
	cancelBtnProps?: any;
}> = ({ delBtnProps, cancelBtnProps }) => {
	return (
		<div
			className="fixed hidden insert-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full top-0 left-0"
			id="modal"
		>
			<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
				<div className="mt-3 text-center">
					<div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
						<img
							src="/assets/trash.svg"
							alt="trash"
							className="inline-block w-6 h-auto"
						/>
					</div>
					<h3 className="font-montserrat text-lg leading-6 font-medium text-gray-900 mt-4 w-60 mx-auto">
						Are you sure to delete all completed todos?
					</h3>
					<div className="mt-2 px-7 py-3">
						<p className="font-montserrat text-sm text-gray-500">
							You can't undo this action afterwards.
						</p>
					</div>
					<div className="flex items-center justify-center gap-2 px-4 py-3">
						<button
							id="cancel"
							className="font-montserrat px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-md w-fit shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
							{...cancelBtnProps}
						>
							cancel
						</button>
						<button
							id="del"
							className="font-montserrat px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md w-fit shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
							{...delBtnProps}
						>
							delete all
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
