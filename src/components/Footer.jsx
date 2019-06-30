import React, { Component } from 'react';
import { footer } from "react-bootstrap";
import "../assets/css/styles.css";

class Footer extends Component {
    render() { 
        return ( 
            <footer className="footer mt-auto py-3">
            <div clasName="container">
              <span className="text-muted">Mawingu &copy; 2019</span>
            </div>
          </footer>
         );
    }
} 
 
export default Footer;