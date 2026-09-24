import { createElement } from "react";
import { MdArrowForward, MdTimer, MdWavingHand } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

const tools = [
    { to: "/hello-world", title: "Hello World", description: "A small route to verify the app shell and navigation.", icon: MdWavingHand, tag: "Starter" },
    { to: "/stopwatch", title: "Stopwatch", description: "Track elapsed time with start, pause, reset and lap actions.", icon: MdTimer, tag: "Utility" },
];

const Home = () => (
    <Styled.Wrapper>
        <Styled.Hero>
            <span className="eyebrow">A SMALL TOOLBOX FOR EVERYDAY WORK</span>
            <h1>Useful tools, kept simple.</h1>
            <p>React Daily Tools is a compact collection of focused frontend experiments that are easy to open, understand and use.</p>
            <NavLink className="primaryButton" to="/stopwatch">Open stopwatch <MdArrowForward aria-hidden="true" /></NavLink>
        </Styled.Hero>
        <Styled.Section>
            <div className="sectionHeader"><div><span className="eyebrow">AVAILABLE NOW</span><h2>Pick a tool</h2></div><span className="count">{tools.length} tools</span></div>
            <div className="toolGrid">
                {tools.map(({ to, title, description, icon: Icon, tag }) => (
                    <NavLink to={to} className="toolCard" key={to}>
                        <div className="icon">{createElement(Icon, { "aria-hidden": true })}</div>
                        <span className="tag">{tag}</span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <span className="cardLink">Open tool <MdArrowForward aria-hidden="true" /></span>
                    </NavLink>
                ))}
            </div>
        </Styled.Section>
        <Styled.About>
            <span className="eyebrow">ABOUT THE COLLECTION</span>
            <h2>Small interfaces, practical lessons.</h2>
            <p>Each route is intentionally lightweight and responsive, making this repository a place to explore reusable React patterns and everyday UI details.</p>
        </Styled.About>
    </Styled.Wrapper>
);

export default Home;
