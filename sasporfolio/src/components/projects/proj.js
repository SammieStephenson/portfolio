import "./proj.css";


const Projects = () => {
    return (
        <div className="proj">
            <h1>Projects</h1>
            <div className="netflix">
                <div className="left">
                    <div className="card">
                        <div className="netpic">
                            <img src="./assets/netPic.png" alt="" className="img" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <a href="https://main.d1zo0b1ozl1ups.amplifyapp.com/GALLERY">
                        <img src="./assets/netgitpic.png" alt="" className="img" />
                    </a>
                </div>
            </div>
            <div className="ecom">
                <div className="caro">
                </div>
            </div>
            <div className="task">
                <div className="card">

                    <div className="taskpic">
                        <a herf="https://main.d26a2fuqh84ysm.amplifyapp.com/" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects; 