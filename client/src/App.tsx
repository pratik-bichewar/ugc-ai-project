import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/Generator';
import Plans from './pages/Plans';
import Mygeneration from './pages/Mygeneration';
import Result from './pages/Result';
import Community from './pages/Community';
import Loading from './pages/Loading';
import { Toaster } from 'react-hot-toast';


function App() {
	return (
		<>
             <Toaster toastOptions={{style: {background : '#333', color:'#fff'}}} />		
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