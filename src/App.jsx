import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Spirits from './components/Spirits';
import BeerWine from './components/BeerWine';
import Cocktails from './components/Cocktails';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Spirits />
        <BeerWine />
        <Cocktails />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
