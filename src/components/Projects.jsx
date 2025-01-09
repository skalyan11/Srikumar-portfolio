import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import discoverable from "../assets/img/discoverable.png";

export const Projects = () => {
    const projects = [
        {
            title: "Discoverable",
            description: "Discoverable project description",
            imgUrl: discoverable   
        },
        {
            title: "Project 2",
            description: "Lorem ipsum 2",
            imgUrl: "https://via.placeholder.com/150"
        }
    ];


        return (
            <section className = "project" id= "project">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                        </Col>
                        <p>Lorem ipsum dummy text</p>
                        <Tab.Container id = "projects-tabs" defaultActiveKey= "first">
                        <Nav variant= "pills" className = "nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey= "second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey= "third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey= "first">
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
                                </Tab.Pane>
                            <Tab.Pane eventKey= "second">second lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey= "third">third lorem ipsum</Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Row>
                </Container>
                <img className="background-image-right" src = {colorSharp2}/>
            </section>
        )
    };