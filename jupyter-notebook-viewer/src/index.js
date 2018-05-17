import React from "react";
import { render } from "react-dom";
import Select from "react-select";
import 'react-select/dist/react-select.css';
import Jups1 from './notebook1'
import Jups2 from './notebook2'

import {
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const BaseLayout = () => (
  <div className="base">
    <header>
      <nav>
        <ul>
          <li class="list-group-item list-group-item-info"><Link to='/notebook1' >Notebook1</Link></li>
          <li class="list-group-item list-group-item-info"><Link to='/notebook2'>Notebook2</Link></li>

        </ul>
      </nav>
    </header>
    <div className="container">
      <Route exact path="/notebook1" component={Jups1} />
      <Route exact path="/notebook2" component={Jups2} />
    </div>
  </div>
)

const New = () => (
  <BrowserRouter>
    <BaseLayout />
  </BrowserRouter>
)
render(
  <div>
  <h2 class = "text-info">Please select the Jupyter notebook you want to view!</h2>
  <New />
  <br />
  <br />
  </div>,document.getElementById("root"))

