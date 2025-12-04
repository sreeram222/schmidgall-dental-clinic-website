
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Whitening from './components/Whitening';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Whitening />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
