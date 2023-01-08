import React from "react"; // нужен для того чтобы babel смог превратить JSX в HTML с помощью функции React.createElement()
import ReactDOM from "react-dom";

import App from "./components/app";

ReactDOM.render(<App />, document.getElementById("root")); // функция превращает react элемент в html элемент
