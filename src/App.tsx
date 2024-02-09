import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle  />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
