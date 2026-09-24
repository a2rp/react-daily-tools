import { createElement } from "react";
import { FaCodepen, FaCoffee, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaHandHoldingHeart, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Styled } from "./Footer.styled";

const links = [
    ["Portfolio", "https://www.ashishranjan.net/", FaGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FaCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FaEnvelope],
];
const support = [
    ["Support", "https://a2rp-donation-page.netlify.app/", FaHandHoldingHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FaCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FaHandHoldingHeart],
];

const LinkGroup = ({ items }) => (
    <div className="iconLinks">
        {items.map(([label, href, Icon]) => (
            <a key={label} href={href} title={label} aria-label={label} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}>
                {createElement(Icon, { "aria-hidden": true })}
            </a>
        ))}
    </div>
);

const Footer = () => (
    <Styled.Wrapper>
        <div className="top">
            <div><strong>React Daily Tools</strong><p>Small frontend tools for focused practice.</p></div>
            <div className="groups"><div><span>Connect</span><LinkGroup items={links} /></div><div><span>Support</span><LinkGroup items={support} /></div></div>
        </div>
        <div className="bottom">
            <span>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
            <span>Built with React</span>
        </div>
    </Styled.Wrapper>
);

export default Footer;
