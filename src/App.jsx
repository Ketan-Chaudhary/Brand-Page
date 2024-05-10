// Bad pratice - using global css
import "./App.css";
import Navigation from "./Component/Navigation";
import Hero from "./Component/Hero";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <Hero/>
      </div>
    </>
  );
}

export default App;
