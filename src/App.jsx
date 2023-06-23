import { Route, createBrowserRouter, createRoutesFromElements ,Outlet, RouterProvider} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About";
import Test from "./Pages/Test";
import Plan from "./Pages/Plan";

function App() {
  const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/test" element={<Test />}></Route>
				<Route path="/plan" element={<Plan />}></Route>
			</Route>
		)
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}



const Root = () => {
  return (
		<>
			<Navbar/>
      <div>
        <Outlet/>
      </div>
		</>
  );
}

export default App
