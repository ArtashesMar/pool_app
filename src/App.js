import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { BeforeAfterHover } from './Components/BeforeAfter';
import { Carousel } from './Components/CarouselComponents';
import { Footer } from './Components/FooterComponent';
import { Header } from './Components/HeaderComponent';
import { Home } from './pages/home';
import { Registration } from './pages/registration';
import { Admin } from './pages/admin';
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/alpha" element={Admin}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
