import ButtonCard from "../ButtonCard/ButtonCard";

export function Disclaimer(){
    return(
        <div className="centered-container">
                <ButtonCard
                backgroundColor="transparent"
                title="Disclaimer"
                content="The information provided on this website is for general informational purposes only and is not intended to be legal advice. Users should consult with a professional attorney before taking any action based on the content provided here. The use of this website, including any 'Contact' email links, does not establish an attorney-client relationship between Muncy, Geisler, Olds & Lowe, PC, and the user.

While we strive to ensure the accuracy of the information on this site, Muncy, Geisler, Olds & Lowe, PC is not responsible for any errors or omissions, nor for any results obtained from the use of this information. 

This website may contain links to third-party websites. Muncy, Geisler, Olds & Lowe, PC does not endorse or make any representations regarding the accuracy of information on those third-party sites."
                buttonText=""
                borderRadius=""
                textColor="#2F4157"
                url=""
            />
        </div>

    )
}