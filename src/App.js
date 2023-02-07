import "./App.scss";

//modules
import { useState } from "react";

//components
import Collections from "./sections/Collections";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import data from "./collectionsData";
import Footer from "./sections/Footer";

const App = () => {
  const [coffees, setCoffees] = useState(data);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="wrapper">
          <Hero />
          <Collections coffees={coffees} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
