import "@fontsource-variable/red-hat-display";
import "@fontsource/kaushan-script";
import { Header } from "./layouts/header/header";
import { Home } from "./layouts/home/home";


function App() {
  return (
    <>
      <Header />
      <main>
        <Home/>
      </main>
      {/* <Main/> */}
    </>
  );
}

export default App;
