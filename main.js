import "./style.scss";

import Three_App from "./src/App/threeApp";

import Fan from "./src/Model/fan.js";

const app = new Three_App();
const fan = new Fan();

app.addModel(fan);
