import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Inventory from './pages/InventoryPage';
import NavBar from "./components/footer-header/NavBar";
import Footer from './components/footer-header/NavFooter'
import Support from './pages/SupportPage';
import "./App.css";

function App() {
  return (
    <>
     <div className="App">
       <NavBar />
       <Routes>
          <Route path="/" element={<HomePage />} />
         <Route path="/Inventory" element={<Inventory />} />
         <Route path="/support" element={<Support />} />
       </Routes>
       <Footer />
     </div>
    </>
  );
}

export default App;