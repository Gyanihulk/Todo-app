import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SecondComponent from "./components/learning-examples/SecondComponent.jsx";
import FirstComponent from "./components/learning-examples/FirstComponent.jsx";
import ThirdComponent from "./components/learning-examples/ThirdComponent.jsx";
import Counter from "./components/counter/Counter.jsx";
import TodoApp from "./components/todo/TodoApp.jsx";
class App extends Component {
  render() {
    return (
      <div className="App">
        
       {/*  <Counter/> */}
       <TodoApp/>

       
      </div>
    );
  }
}
class LearningComponents extends Component {
  render() {
    return (
      <div className="App">
        My hello World <FirstComponent> </FirstComponent>{" "}
        <SecondComponent> </SecondComponent> <ThirdComponent> </ThirdComponent>
      </div>
    );
  }
}

export default App;
