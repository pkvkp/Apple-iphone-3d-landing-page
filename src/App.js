import "./App.css";
import { GlobalStyles } from "./styles/GlobalStyles";
import Quote from "./section/Quote";
import Hero from "./section/Hero";
import PhoneModel from "./section/PhoneModel";
import Design from "./section/Design";
import Display from "./section/Display";

function App() {
  return (
    <>
      <GlobalStyles />
      <Quote />
      {/* <PhoneModel/> */}
      <Hero/>
      <Design/>
      <Display/>
    </>
  );
}

export default App;
