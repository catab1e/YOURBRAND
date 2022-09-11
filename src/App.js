import Cards from "./components/Cards";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <Navbar/>
      <MainContent/>
      <Cards/>
      <Footer/>
      {/* <MainRoutes/> */}
    </>
  );
}

export default App;
