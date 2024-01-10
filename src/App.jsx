import Header from "./components/Header";
import AppLayout from "./components/AppLayout";
import Hero from "./components/Hero";
import Statics from "./components/Statics";
import Footer from "./components/Footer";
import Boost from "./components/Boost";
function App() {
  return (
    <>
      <AppLayout>
        <Header />
        <Hero />
      </AppLayout>
      <Statics />
      <Boost />
      <Footer />
    </>
  );
}

export default App;
