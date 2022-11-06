import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Index } from "./pages/Index";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Index />
			<Footer />
		</div>
	);
}

export default App;
