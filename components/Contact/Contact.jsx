import GoogleMapComp from "../GoogleMap.jsx/GoogleMapComp";
import ContactForm from "./ContactForm";

export default function Contact(){
    
    return(
        <div className="googleMap" style={{paddingTop: '150px', paddingLeft:'50px', display:'flex'}}>
            <GoogleMapComp></GoogleMapComp>
            <ContactForm></ContactForm>
        </div>
    )
}