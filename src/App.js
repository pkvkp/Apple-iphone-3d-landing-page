import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import Quote from "./section/Quote";
import Hero from "./section/Hero";
import PhoneModel from "./section/PhoneModel";
import Design from "./section/Design";

function App() {
  return (
    <>
      <GlobalStyles />
      <Quote />
      {/* <PhoneModel/> */}
      <Hero/>
      <Design/>
    </>
  );
}

export default App;
