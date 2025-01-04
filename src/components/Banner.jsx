import { useState, useEffect } from 'react';
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as ArrowRightCircle } from "../assets/img/arrow-right-circle.svg";
import headerImg from "../assets/img/header-img.png";
import './Banner.css'; // Import the CSS file

export const Banner = () => {
    const [loopNum, setLoopnum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['web developer', 'designer', 'freelancer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const deletingSpeed = 150; // Constant speed for deleting

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(deletingSpeed); // Set constant speed for deleting
        } else {
            setDelta(300 - Math.random() * 100); // Random speed for typing
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopnum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">What's Good</span>
                        <h1>{`Hello, I am a`}<span className="wrap"> {text}</span></h1>
                        <p>
                            My name is Srikumar Kalyan, and I am studying data science at the University of Michigan. I love building 
                            applications and projects and am always looking for new opportunities to learn and grow. Connect with me if you
                            like what you see!
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" className="shifted-image" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;