
import Booking from './components/sections/Booking';
import Destination from './components/sections/Destination';
import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';
import Services from './components/sections/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Destination/>
      <Booking/>
    </div>
  );
}

export default App;
