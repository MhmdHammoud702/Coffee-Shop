import Hero from './assets/components/Hero/Hero.jsx';
import Services from './assets/components/Services/Services.jsx';
import Order from './assets/components/Order/Order.jsx';
import Download from './assets/components/Download/Download.jsx';
import Footer from './assets/components/Footer/Footer.jsx';
function App() {
  return <div className="overflow-x-hidden ">
    <Hero/>
    <Services/>
    <Order/>
    <Download/>
    <Footer/>
  </div>;
}

export default App
