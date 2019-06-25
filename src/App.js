import React from "react";
import { render } from "react-dom";

const Pet = props => {
  return React.createElement("div", { className: "card" }, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.url),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  render() {
    return React.createElement("div", { className: "Aligner column" }, [
      React.createElement("div", {}, [
        React.createElement("h1", {}, "New Tab Override Chrome Extention!")
      ]),

      React.createElement("div", { className: "Aligner" }, [
        React.createElement(Pet, {
          name: "Card 1",
          url: "https://www.google.com/",
          about: "search engine"
        }),
        React.createElement(Pet, {
          name: "Card 2",
          url: "https://wwww.unsplash.com/",
          about: "free quality photo stock"
        }),
        React.createElement(Pet, {
          name: "Card 3",
          url: "https://www.nytimes.com/",
          about: "news"
        })
      ])
    ]);
  }
}
render(React.createElement(App), document.getElementById("root"));
