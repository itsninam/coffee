import "./App.scss";

//modules
import { useState } from "react";

//components
import data from "./collectionsData";
import banner from "./bannerInfo";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CreatePlan from "./pages/createPlan/CreatePlan";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [coffees, setCoffees] = useState(data);
  const { home, about, plan } = banner;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  coffees={coffees}
                  title={home.title}
                  description={home.description}
                  button={home.button}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About title={about.title} description={about.description} />
              }
            />
            <Route
              path="/plan"
              element={
                <CreatePlan title={plan.title} description={plan.description} />
              }
            />
            //TODO - create error page component
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
