import "./proj.css";
import Caro from "./caro";
import { isRenderMode } from "react-pdf/dist/umd/shared/propTypes";


const Projects = () => {
    return (
        <>
            <div className="proj">
                <h1 className="section">Netflix Redesign</h1>
                <h5>Group project using React, and MySQL. Includes site, github, and user persona.</h5>
                <div className="netflix">
                    <div className="row">
                        <div className="card">
                            <a href="https://main.d1zo0b1ozl1ups.amplifyapp.com/GALLERY" target="_blank"
                                rel="noreferrer">
                                <div className="netpic" />
                            </a>
                        </div>
                        <div className="column">
                            <div className="cardgit">
                                <a href="https://github.com/SammieStephenson/netflix-clone2" target="_blank"
                                    rel="noreferrer">
                                    <div className="netgit" />
                                </a>
                            </div>
                            <div className="cardup">
                                <div className="netuserp"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="ecom">
                <h1> Ecommerce Project </h1>
                <h5> The evolution of my Ecommerce project from first version to third. HTML, CSS, Js, React, MySQL.</h5>
                <div className="cardec">
                    <div className="slider">
                        <figure>
                            <a href="http://localhost:3001/" target="_blank"
                                rel="noreferrer"><img className="ecopic" src="../assets/wideecorea.png" alt="" /></a>
                            <a href="http://127.0.0.1:5502/home.html" target="_blank"
                                rel="noreferrer"><img className="ecopic" src="../assets/ecomtwo.png" alt="" /></a>
                            <a href="http://127.0.0.1:5500/home.html" target="_blank"
                                rel="noreferrer"><img className="ecopic" src="../assets/firstecom.png" alt="" /></a>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="task">
                <div className="row">
                    <div className="card">
                        <a href="https://main.d26a2fuqh84ysm.amplifyapp.com/" target="_blank"
                            rel="noreferrer">
                            <div className="taskpic" />
                        </a>
                    </div>
                    <div className="cardtaskbox">
                        <h1 className="taskhead"> Task Tracker Project</h1>
                        <p className="tasktext"> This project was the first time I deployed using AWS Amplify. I still host it today out of sentiment. My favorite part of this project is the background image change from day to night at 7p. Hover over image to see the difference. Click to see site.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects; 