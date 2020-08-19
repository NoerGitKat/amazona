import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

// Pages
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";

// Components
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
                <Route exact path="/products/:id" component={ProductPage} />
                <Route exact path="/cart/:productId?" component={CartPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/" component={HomePage} />
                <Redirect to="/" />
              </Switch>
            </div>
          </main>
          <Footer text="All rights reserved." />
        </div>
      </Router>
    </div>
  );
}

export default App;
