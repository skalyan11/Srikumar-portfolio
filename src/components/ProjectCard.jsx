import {Col, Container, Tab} from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, githubUrl}) => {
return (
    <Col sm = {6} md = {4} >
        <div className = "proj-imgbx">
        <a href = {githubUrl} target = "_blank">
            <img src = {imgUrl} />
        </a>
        <div className = "project-txtx">
            <h4>{title}</h4>
            <span>{description}</span>

        </div>
        </div>
    </Col>
)
}