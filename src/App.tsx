import "@fontsource-variable/red-hat-display";
import "@fontsource/kaushan-script";
import { Header } from "./layouts/header/header";
import { Home } from "./layouts/home/home";
import { Logos } from "./layouts/logo/logos";


function App() {
  return (
    <>
      <Header />
      <main>
        <Home/>
        <Logos/>
        
      </main>
      {/* <Main/> */}
    </>
  );
}

export default App;
