import GoogleMapComp from "../GoogleMap.jsx/GoogleMapComp";
import ContactForm from "./ContactForm";
import './Contact.css';  // Ensure this CSS file has the required styles

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="form-section">
                <ContactForm />
            </div>
            <div className="map-section">
                <GoogleMapComp />
            </div>
        </div>
    );
}