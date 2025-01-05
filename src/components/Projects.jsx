import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.jpg";

export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. ",
            imgUrl: "https://via.placeholder.com/150"   
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
                        <Nav variant= "pills" defaultActiveKey= "/home">
                            <Nav.Item>
                                <Nav.Link eventKey = "first">Tabe 1</Nav.Link>
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