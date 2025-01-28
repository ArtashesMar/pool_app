import './App.css';
import { Footer } from './Components/FooterComponent';
import { Header } from './Components/HeaderComponent';
import Carousel from './Components/CaruselComponents';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
