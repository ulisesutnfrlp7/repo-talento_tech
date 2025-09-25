// src/components/Footer.jsx

import React from 'react';
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark py-3 mt-auto">
            <Container className="text-light text-center small">
                AhorrateElMango © - All rights reserved — 
                <span className="text-danger"> INSTAGRAM: ahorraelmango_oficial</span> — 
                <span className="text-primary"> TWITTER: ok_ahorraelmango_ok</span>
            </Container>
        </footer>
    )
}

export default Footer;