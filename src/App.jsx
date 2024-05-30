import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<main className="bg-slate-300/20">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/*"
						element={
							<>
								<Routes>
									<Route path="/about" element={<About />} />
									<Route path="/projects" element={<Projects />} />
									<Route path="/contact" element={<Contact />} />
								</Routes>
								<Footer />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
			{/* <h1>hii</h1> */}
		</main>
	);
};

export default App;
