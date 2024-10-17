import ContactForm from "./ContactForm";
import './Contact.css';  // Ensure this CSS file has the required styles
import Hero2 from '../Hero2/Hero2';
import teamphoto from '../../pictures/monument.jpg'
import { GradientBackground } from "../Gradient/Gradient";
import { Container } from "../Container/Container";
import { NavBar } from "../NavBar/NavBar";
import { Heading } from "../Heading/Heading";
export default function Contact() {
    return (
        <div>

            <div className="contact-page-container">
                <Heading as="h2" className="max-w-full pt-16">
                        Contact Us
                </Heading>
                        
                <div className="contact-banner">
                </div>
                <div className="contact-form-section">
                <a href="/disclaimer">Disclaimer</a>
                    <ContactForm />
                </div>
            </div>
        </div>

    );
}