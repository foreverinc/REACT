
function Planheader() {
  return (
		<div className="flex items-center justify-center">
			<input type="text" placeholder="New plan name" />
			<button
				type="button"
				className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-s-none text-sm px-5 py-2.5 mr-2 bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
				Add plan
			</button>
		</div>
  );
}

export default Planheader