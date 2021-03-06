import React from "react";
import './index.css';
import Layout from '../components/layout';
import codeIcon from '../images/code.png';

const HomePage = () => {
  return (
    <Layout>
      <div className="HomePage">
        <img src={codeIcon} alt="Code"/>
        <h1>Hi, I'm Branon.</h1>
        <p>I'm a software developer.</p>
      </div>
    </Layout>
    )
}
 export default HomePage;