import './App.css';
import Header from './components/Header';
import NavbarWithSearch from './components/NavbarWithSearch';
import Carousel from './components/Carousel';
import CardsSection from './components/CardsSection';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <NavbarWithSearch />
      <CardsSection />
      <Pagination />
      <Footer />
    </div>
  );
}

export default App;
