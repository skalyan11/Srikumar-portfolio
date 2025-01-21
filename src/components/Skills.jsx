import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import icon2 from "../assets/img/icon2.svg";
import pcdisplay from "../assets/img/pc-display.svg";
import colorSharp from "../assets/img/color-sharp.png"; // Import colorSharp
import robot from "../assets/img/robot.svg";
import git from "../assets/img/git.svg";
//import colorSharp2 from "../assets/img/color-sharp2.png"; // Import colorSharp2

export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Here are some of my skills. These are the most related skills I have found from the work I have been doing</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={icon2} alt="Image" />
                                    <h5>Web Development</h5>
                                    <p> Full Stack: HTML, CSS, Javascript, React, Node.js, Flask,
                                        Express.js, C++, Java </p>
                                </div>
                                <div className="item">
                                    <img src={pcdisplay} alt="Image" />
                                    <h5>Databases and APIs</h5>
                                    <p> SQL, MongoDB, PostgreSQL, MySQL, Firebase, AWS </p>
                                </div>
                                <div className="item">
                                    <img src={robot} alt="Image" />
                                    <h5>AI/Machine Learning</h5>
                                    <p> Python, R, TensorFlow, PyTorch, Scikit-learn, Pandas, Numpy, LLMs, Langchain,</p>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Image" />
                                    <h5>Workflow Management</h5>
                                    <p> VSCode, Git, Pycharm, Jupyter Notebook/Lab, Docker, PGAdmin </p>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};
