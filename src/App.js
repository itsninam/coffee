import "./App.scss";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
