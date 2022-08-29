import "./about.css";

const About = () => {
    return (
        <div className="a" id="About">
            <div className="abpic">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="./assets/samsun.jpg" alt="" className="a-img" />
                </div>
            </div>
            <div className="abtext">
                <h2 className="abtitle">It's nice to meet you digitally... Let me tell you a little bit about myself!</h2>
                <p className="absub">Hello!</p>
                <p className="abdesc">
                    I'm a young, Organized, and dependable junior software engineer who
                    can successfully manage multiple priorities. A team player willing to
                    take on added responsibilities to drive team goals forward. I also
                    Love to play music with my guitar!
                </p>
            </div>
        </div>
    );
};

export default About;