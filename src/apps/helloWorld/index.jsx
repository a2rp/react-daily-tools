import { MdWavingHand } from "react-icons/md";
import styled from "styled-components";

const HelloWorld = () => (
    <Wrapper>
        <MdWavingHand aria-hidden="true" />
        <span className="eyebrow">FIRST ROUTE</span>
        <h1>Hello, world.</h1>
        <p>This small page confirms that the shared header, navigation drawer and route loading are working correctly.</p>
    </Wrapper>
);

const Wrapper = styled.section`
    max-width: 760px; padding: 40px 0;
    svg { color: var(--accent); font-size: 40px; }
    .eyebrow { display: block; margin-top: 22px; color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h1 { margin: 10px 0; color: var(--text); font-size: clamp(3rem, 8vw, 6rem); line-height: 0.95; }
    p { color: var(--muted); font-size: 1.05rem; }
`;

export default HelloWorld;
