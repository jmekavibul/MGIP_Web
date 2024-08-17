import ContactForm from "./ContactForm";
import './Contact.css';  // Ensure this CSS file has the required styles

export default function Contact() {
    return (
        <div className="contact-page-container">
            <div className="contact-banner">
            </div>
            <div className="contact-form-section">
                <ContactForm />
            </div>
        </div>
    );
}