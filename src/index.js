import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello Kirill!</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));