import ContactForm from "./ContactForm";
import './Contact.css';  // Ensure this CSS file has the required styles
import { GradientBackground } from "../Gradient/Gradient";
import { Heading } from "../Heading/Heading";
import { FadeIn } from "../FadeIn";
export default function Contact() {
    return (
        <div>
            <GradientBackground />
            <FadeIn>
            <div className="contact-page-container">
                <Heading as="h2" className="max-w-full pt-36">
                        Contact Us
                </Heading>
                        
                <div className="contact-banner">
                </div>
                <div className="contact-form-section">
                <a href="/disclaimer">Disclaimer</a>
                    <ContactForm />
                </div>
            </div>
            </FadeIn>

        </div>

    );
}