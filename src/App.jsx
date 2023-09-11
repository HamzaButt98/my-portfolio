import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Work, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-1 bg-primary"> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen md:h-auto"> {/* Adjust height using media query */}
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Work/>
        <Feedbacks/>
      </div>

      <div className="relative z-0 bg-primary">
        <Contact/>
        <StarsCanvas/>
      </div>
    </BrowserRouter>
  );
}

export default App;
