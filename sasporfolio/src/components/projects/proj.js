import "./proj.css";
import Caro from "./caro";
import { isRenderMode } from "react-pdf/dist/umd/shared/propTypes";


const Projects = () => {
    return (
        <>
            <div className="proj">
                <h1 className="section">Netflix Redesign: Group Work</h1>
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
                <h1> Version 1-3 Ecommerce Project </h1>
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
                        <p className="tasktext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects; 