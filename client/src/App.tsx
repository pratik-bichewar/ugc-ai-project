import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/generator';
import Plans from './pages/plans';
import Mygeneration from './pages/mygeneration';
import Result from './pages/result';
import Community from './pages/community';
import Loading from './pages/loading';


function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />

			<Routes>
                <Route path='/' element={<Home />} />
				<Route path='/generator' element={<Generator />} />
				<Route path='/plans' element={<Plans />} />
				<Route path='/mygeneration' element={<Mygeneration />} />
				<Route path='/result/:projectid' element={<Result />} />
				<Route path='/community' element={<Community />} />
				<Route path='/loading' element={<Loading />} />
				 
			</Routes>




			<Footer />
		</>
	);
}
export default App;