import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/Aboutme";
import Footer from "./components/Footer/Footer";
import CategoryList from "./components/CategoryList/CategoryList";
import Logo from "./components/Logo/Logo";
import UserLogOut from "./components/UserLogOut/UserLogOut"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav component">
            <Logo />
            <CategoryList />
            <UserLogOut />
          </nav>

        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default App;
