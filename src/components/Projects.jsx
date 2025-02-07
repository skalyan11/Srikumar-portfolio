import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import discoverable from "../assets/img/discoverable.png";
import scraper from "../assets/img/scraper.png";
import neural from "../assets/img/neural.png";
import facescan from "../assets/img/facescan.png";
import pflio from "../assets/img/pflio.png";

export const Projects = () => {
    const projects = [
        {
            title: "Discoverable",
            description: "Discoverable is a platform that helps users pick a restaurant. I created a swipe based UI, and created a system where people can like or dislike restaurants in an area. This was built using React, Node.js, Firebase, and Postgres.",
            imgUrl: discoverable,
            githubUrl: "https://github.com/skalyan11/RestaurantAPI"   
        },
        {
            title: "Face Recognition",
            description: "I built a face recognition model using Python and OpenCV. This model can recognize faces in images using Tensorflow, and a couple of other APIs.",
            imgUrl: facescan,
            githubUrl: "https://github.com/skalyan11/face-scanning"
        },
        {
            title: "LinkedIn Scraper",
            description: "This uses OpenAI's API to create a LinkedIn scraper that can scrape LinkedIn profiles and extract information from them. It uses a common framework of langchain, python, and tavily to search through the web.",
            imgUrl: scraper,
            githubUrl: "https://github.com/skalyan11"
        },
        {
            title: "Portfolio",
            description: "Using react, node, and HTML/CSS/JS, I created my very own website.",
            imgUrl: pflio,
            githubUrl: "https://github.com/skalyan11/Srikumar-portfolio"
        }
    ];


        return (
            <section className = "project" id= "projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                        </Col>
                        <p>These are some of the projects that I have worked on</p>
                                <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key = {index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                                </Row>
                    </Row>
                </Container>
                <img className="background-image-right" src = {colorSharp2}/>
            </section>
        )
    };
    