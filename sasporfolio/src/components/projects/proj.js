import "./proj.css";
import Caro from "./caro";
import { isRenderMode } from "react-pdf/dist/umd/shared/propTypes";


const Projects = () => {
    return (
        <>
            <div className="proj">
                <h1>Projects</h1>
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
                <div className="ecomcaro">

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