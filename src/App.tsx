import "@fontsource-variable/red-hat-display";
import "@fontsource/kaushan-script";
import { Header } from "./layouts/header/header";
import { Home } from "./layouts/home/home";
import { Logos } from "./layouts/logo/logos";
import { Programs } from "./layouts/programs/programs";
import { Choose } from "./layouts/choose/choose";
import { Pricing } from "./layouts/pricing/pricing";
import { CalculateBMI } from "./layouts/calculate/calculateBMI";


function App() {
  return (
    <>
      <Header />
      <main>
        <Home/>
        <Logos/>
        <Programs/>
        <Choose/>
        <Pricing/>
        <CalculateBMI/>
      </main>
      {/* <Main/> */}
    </>
  );
}

export default App;
