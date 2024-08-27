import ButtonCard from "../ButtonCard/ButtonCard";
import "./Careers.css";
export function Careers(){
    return(
        <div className="centered-container">
                <ButtonCard
                backgroundColor="transparent"
                title="Careers Opportunities"
                content="At Muncy, Geissler, Olds & Lowe PC, we welcome inquiries from talented individuals eager to join our team. If you are a motivated candidate with a passion for learning, a strong work ethic, and an interest in the dynamic fields of patent, trademark, and copyright law, we invite you to explore the career opportunities we offer. 
                
                As an equal opportunity employer, we offer a comprehensive benefits package. To view and apply for positions with us"
                buttonText="Apply now"
                borderRadius=""
                textColor="#2F4157"
            />
        </div>

    )
}