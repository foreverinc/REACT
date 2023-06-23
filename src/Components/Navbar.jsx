import { NavLink,Link } from "react-router-dom";


function Navbar() {
	
	return (
		<>
			<nav className=" bg-gray-800">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link to="/" className=" flex items-center">
						{/* <img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/> */}
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
							Weather
						</span>
					</Link>
					<div className="flex md:order-2">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							Hire me
						</button>
						<button
							data-collapse-toggle="navbar-cta"
							type="button"
							className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
							aria-controls="navbar-cta"
							aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"></path>
							</svg>
						</button>
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
						id="navbar-cta">
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-800 border-gray-700">
							<li>
								<NavLink
									to="/"
									className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-600"
									aria-current="page">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="about/"
									className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-600"
									aria-current="page">
									About us
								</NavLink>
							</li>
							<li>
								<NavLink
									to="test/"
									className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-600"
									aria-current="page">
									Testing
								</NavLink>
							</li>
							<li>
								<NavLink
									to="plan/"
									className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 hover:text-blue-600"
									aria-current="page">
									Travel plan
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
