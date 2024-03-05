
import Booking from './components/sections/Booking';
import Destination from './components/sections/Destination';
import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';
import NewsLetter from './components/sections/NewsLetter';
import Partners from './components/sections/Partners';
import Services from './components/sections/Services';
import Testimonial from './components/sections/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Destination/>
      <Booking/>
      <Testimonial/>
      <Partners/>
      <NewsLetter/>
    </div>
  );
}

export default App;
