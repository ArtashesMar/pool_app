import './App.css';
import { BeforeAfterHover } from './Components/BeforeAfter';
import { Carousel } from './Components/CarouselComponents';
import { Footer } from './Components/FooterComponent';
import { Header } from './Components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <BeforeAfterHover/>
      <Footer/>
    </div>
  );
}

export default App;
