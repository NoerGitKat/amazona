import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";
import ProductsPage from "./pages/products";

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header setIsOpen={setIsOpen} />
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="grid-container">
          <main className="main">
            <div className="content">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products/:id" component={ProductsPage} />
              </Switch>
            </div>
          </main>
          <Footer text="All right reserved." />
        </div>
      </Router>
    </div>
  );
}

export default App;
