import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
// function component
// remember props are read only
function Welcome(props) {
  return <h1>Hello, {props.name} </h1>;
}

// class component

class WelcomeMe extends React.Component {
  render() {
    return <h1>Hello , {this.props.name}</h1>;
  }
}

root.render(
  <div>
    <Welcome name={"seyha"} />
    <Welcome name={"seyha01"} />
    <WelcomeMe name={"sasa"} />
    <WelcomeMe name={"sasa01"} />
  </div>
);
