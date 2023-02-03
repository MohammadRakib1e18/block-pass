import "./App.css";
import BlockPass from "./Components/BlockPass";
import logo1 from './images/wallet-logo1.jpg'
import logo2 from './images/wallet-logo2.jpg'
import logo3 from './images/wallet-logo3.png'


function App() {

	return (
		<div className="text-slate-200 App">
			<BlockPass logoList={[logo1, logo2, logo3]}></BlockPass>
		</div>
	);
}

export default App;
