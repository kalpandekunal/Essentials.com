import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
