import React from "react";
import './blog.css';
import Layout from '../components/layout';
import codeIcon from '../images/code.png';

const BlogPage = () => {
  return (
    <Layout>
      <div className="BlogPage">
        <img src={codeIcon} alt="Code"/>
        <h1>Blog</h1>
        <p>The latest stuff in my life.</p>
      </div>
    </Layout>
    )
}
 export default BlogPage;