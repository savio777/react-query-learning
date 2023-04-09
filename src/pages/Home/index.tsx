import React from "react";

import { Header, Repositories } from "../../components";
import "./styles.css";

const Home: React.FC = () => (
  <div className="container">
    <Header />
    <Repositories />
  </div>
);

export default Home;
