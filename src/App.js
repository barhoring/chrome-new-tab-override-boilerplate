import React from "react";
import { render } from "react-dom";
import Card from "./Card";

class App extends React.Component {
  render() {
    return (
      <div className="Aligner column">
        <div>
          <h1>New Tab Override Chrome Extension!</h1>
        </div>
        <div className="Aligner">
          <Card
            name="Card 1"
            url="https://www.google.com/"
            about="search engine"
          />
          <Card
            name="Card 2"
            url="https://wwww.unsplash.com/"
            about="free quality photo stock"
          />
          <Card name="Card 3" url="https://www.nytimes.com/" about="news" />
          <Card
            name="Card 4"
            url="https://www.instagram.com/"
            about="social media"
          />
        </div>
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
