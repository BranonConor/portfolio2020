import React from "react";
import './projects.css';
import Layout from '../components/layout';
import codeIcon from '../images/code.png';

const ProjectsPage = () => {
  return (
    <Layout>
        <div className="ProjectsPage">
            <img src={codeIcon} alt="Code"/>
            <h1>Projects</h1>
            <p>See what I've been working on!</p>
        </div>
    </Layout>
    )
}
 export default ProjectsPage;