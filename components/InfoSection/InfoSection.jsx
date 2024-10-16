import React, { useEffect, useState } from 'react';
import ThreeCardSection from '../ThreeCardSection/ThreeCardSection';
import SixCardColors from '../SixCardColors/SixCardColors';
import './InfoSection.css'
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaGavel,
  FaShieldAlt,
  FaBriefcase,
  FaLanguage,
  FaFileSignature,
  FaTrademark,
  FaCopyright,
} from 'react-icons/fa';
import { Container } from '../Container/Container';
import { Heading } from '../Heading/Heading';
import { LogoCloud } from '../LogoCloud/LogoCloud';
const InfoSection = () => {
    const transactionData = [
        {
          description: 'Serve major corporations and mid-sized enterprises domestically and internationally.',
          icon: FaGlobe,
        },
        {
          description: 'Situated in the DC metro area just a few minutes away from the USPTO.',
          icon: FaMapMarkerAlt,
        },
        {
          description: 'Attorneys with science or technical backgrounds and prior experience as USPTO patent examiners.',
          icon: FaGavel,
        },
        {
          description: 'Deliver superior quality work efficiently and cost-effectively.',
          icon: FaBriefcase,
        },
        {
          description: 'Secure intellectual property protection efficiently and cost-effectively.',
          icon: FaShieldAlt,
        },
        {
          description: 'Proficient in several languages to meet your global business needs.',
          icon: FaLanguage,
        },
      ];
    
      const serviceCards = [
        {
          title: 'Patent',
          description:
            'Patents are granted for inventions that are novel, non-obvious, and useful. An invention can be any new and useful process, machine, manufacture, or composition of matter, or any new and useful improvement thereof. Examples of patentable inventions include new technologies, products, methods, devices, and chemical compounds.',
          icon: FaFileSignature,
          linkText: 'Learn More',
          moreText: `
            Patent Application Drafting: Our skilled professionals will work closely with you to draft high-quality patent applications that accurately and effectively describe your inventions, ensuring the best possible chance of approval by patent offices.
            Office Action Responses: We provide strategic guidance and expert responses to office actions issued by patent examiners, addressing any objections or rejections and advocating for the approval of your patent application.
            Portfolio Management: We offer comprehensive portfolio management services to help you strategically manage your patent portfolio, including monitoring deadlines, evaluating opportunities for expansion or consolidation, and optimizing the value of your intellectual property assets.
          `,
        },
        {
          title: 'Trademark',
          description:
            'A trademark is a distinctive sign or symbol used to identify and distinguish the goods or services of one seller or provider from those of others. Trademarks can take various forms, including words, names, logos, slogans, symbols, designs, colors, or even sounds and smells. Essentially, a trademark serves as a brand identifier, helping consumers recognize and associate certain products or services with a particular source or origin.',
          icon: FaTrademark,
          linkText: 'Learn More',
          moreText: `
            Trademark Search and Clearance: We conduct thorough trademark searches to assess the availability and registrability of your desired trademarks, identifying potential conflicts and minimizing the risk of infringement issues.
            Trademark Application Filing: Our team prepares and files trademark applications with the appropriate trademark offices, ensuring compliance with all legal requirements and maximizing the likelihood of successful registration.
            Office Action Responses: We assist in responding to office actions issued by trademark examiners, addressing any objections or rejections and advocating for the approval of your trademark application.
            Trademark Monitoring and Enforcement: We offer proactive trademark monitoring services to safeguard your trademarks against unauthorized use or infringement, as well as enforcement strategies to protect your rights and preserve the integrity of your brand.
            Trademark Portfolio Management: We provide comprehensive portfolio management services to help you strategically manage your trademark portfolio, including maintenance filings, renewal applications, and portfolio audits.
          `,
        },
        {
          title: 'Copyright',
          description:
            'Copyright is a form of intellectual property law that grants exclusive rights to the creators of original works, allowing them to control the use and distribution of their creations. It protects a wide range of creative works, including literary, artistic, musical, and dramatic works, as well as software code, architectural designs, and other original expressions.',
          icon: FaCopyright,
          linkText: 'Learn More',
          moreText: `
            Copyright Registration: We assist in registering your original works of authorship with the appropriate copyright offices, providing you with the strongest legal protection available and enabling you to enforce your rights against infringement.
            Copyright Licensing and Agreements: We draft and negotiate copyright licenses, assignments, and other agreements to help you monetize your copyrights, manage rights distribution, and facilitate collaborations while safeguarding your interests.
            Copyright Enforcement: Our team helps you enforce your copyright rights by identifying and addressing instances of infringement, sending cease-and-desist letters, negotiating settlements, and, if necessary, pursuing legal action to protect your works.
            Digital Rights Management: We provide guidance on digital rights management strategies to help you control the distribution, access, and use of your digital content online, mitigating the risk of unauthorized copying, sharing, or exploitation.
            Copyright Compliance and Counseling: We offer proactive copyright counseling and compliance services to help you navigate complex copyright issues, understand your rights and obligations, and avoid inadvertent infringement.
          `,
        },
      ];
    
      const serviceColors = ['#D8E8E6', '#D9E3E8', '#E5EAF0'];
      const iconBackgroundColor = ['#5B9A93', '#577C8E', '#2F4157'];
      
    return (
                <div id="feature-section" className="overflow-hidden">
                    <div className=" bg-gradient-to-b from-white from-50% bg-slate-50 pb-36">
                    <Container className="mt-5 mb-24 ">
                        <LogoCloud />
                    </Container>
                    <Container className=" pt-16">
                        
                        <Heading as="h2" className="max-w-full text-center">
                        About Our Firm
                        </Heading>
                        <p className="mt-16 text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
                        Muncy, Geissler, Olds & Lowe PC is an intellectual property law firm in the Washington DC metropolitan area. Founded in 2006, the firm has become a top IP law firm, serving a diverse range of domestic and international clients. Our multilingual team, with expertise in science and technology, delivers superior quality work efficiently and cost-effectively.
                        </p>
                    </Container>

                    </div>
                    <ThreeCardSection cards={serviceCards} colors={serviceColors} iconBackgroundColor={iconBackgroundColor} />

                        <SixCardColors
                        data={transactionData}
                        colors={['#5B9A93', '#577C8E', '#2F4157', '#577C8E', '#2F4157', '#5B9A93']}
                        languages={['English, español, 中文, 日本語, 한국인']}
                        />
                </div>
    );
};

export default InfoSection;
