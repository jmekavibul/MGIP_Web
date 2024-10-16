import ButtonCard from "../ButtonCard/ButtonCard";
import { Container } from "../Container/Container";
import { GradientBackground } from "../Gradient/Gradient";
import { NavBar } from "../NavBar/NavBar";
import "./Careers.css";

export function Careers() {
  return (
    <div>
    <GradientBackground />
    <Container>
        <NavBar />
    </Container>
        <div className="centered-container">

            <ButtonCard
            backgroundColor="transparent"
            title="Career Opportunities"
            content={[
                "At Muncy, Geissler, Olds & Lowe PC, we welcome inquiries from talented individuals eager to join our team. If you are a motivated candidate with a passion for learning, a strong work ethic, and an interest in the dynamic fields of patent, trademark, and copyright law, we invite you to explore the career opportunities we offer.",
                "As an equal opportunity employer, we offer a comprehensive benefits package. To view and apply for positions with us."
            ]}
            buttonText="Apply now"
            borderRadius=""
            textColor="#2F4157"
            url="https://recruiting.paylocity.com/recruiting/jobs/All/5847c0ea-c9f8-4ed7-8865-cbd0d03e3e2d/Muncy-Geissler-Olds-Lowe-PC"
            center={false}
            />
            </div>
    </div>

  );
}
