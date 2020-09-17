import React from "react";
import './contact.css';
import Layout from '../components/layout';
import codeIcon from '../images/code.png';

const ContactPage = () => {
  return (
    <Layout>
      <div className="ContactPage">
        <img src={codeIcon} alt="Code"/>
        <h1>Blog</h1>
        <p>The latest stuff in my life.</p>
      </div>
    </Layout>
    )
}
 export default ContactPage;