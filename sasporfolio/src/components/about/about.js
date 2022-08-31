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
                <h2 className="abtitle">It's nice to meet you... Let me tell you a little bit about myself!</h2>
                <h3 className="absub">My name is Sammie A Stephenson, or Sam for short.</h3>
                <p className="abdesc">
                    I am a young and hungry software developer who is interested in
                    expanding my knowledge base, collaborating with others, and experiencing
                    first-hand opportunities for growth. Well-rounded understanding of people and a strong start to my working life network. I jump at the
                    opportunity to connect and assist others, and also face challenging situations with tact and
                    professionalism. I look forward to bringing a fresh unique perspective to the corporate
                    world that is comfortable bridging both veteran workers as well as the new generation
                    coming soon to the workforce.  While my passion is bold my ability to drive results as well
                    as be an accountable team player set me above the rest.
                </p>
            </div>
        </div>
    );
};

export default About;