import styled from "styled-components";

const Wrapper = styled.div`display: grid; gap: 64px;`;
const Hero = styled.section`
    padding: clamp(30px, 7vw, 78px) clamp(22px, 6vw, 70px);
    border: 1px solid var(--border); border-radius: 18px; background: radial-gradient(circle at 90% 12%, var(--accent-soft), transparent 34%), var(--card);
    .eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h1 { max-width: 720px; margin: 12px 0 16px; color: var(--text); font-size: clamp(2.6rem, 7vw, 6.4rem); line-height: 0.96; }
    p { max-width: 630px; margin-bottom: 28px; color: var(--muted); font-size: 1.05rem; }
    .primaryButton { display: inline-flex; align-items: center; gap: 8px; padding: 12px 16px; color: var(--text); border: 1px solid var(--border); border-radius: 10px; background: transparent; }
    .primaryButton:hover { color: var(--accent); border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
`;
const Section = styled.section`
    .sectionHeader { display: flex; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 18px; }
    .eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h2 { margin-top: 7px; color: var(--text); font-size: clamp(1.8rem, 4vw, 3rem); }
    .count { color: var(--muted); font-size: 0.82rem; }
    .toolGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
    .toolCard { display: grid; gap: 9px; min-height: 230px; padding: 22px; color: inherit; border: 1px solid var(--border); border-radius: 15px; background: var(--card); transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
    .toolCard:hover { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
    .icon { width: 42px; height: 42px; display: grid; place-items: center; color: var(--accent); border: 1px solid var(--border); border-radius: 11px; }
    .tag { color: var(--muted); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; }
    h3 { color: var(--text); font-size: 1.35rem; } p { color: var(--muted); }
    .cardLink { display: inline-flex; align-items: center; gap: 6px; margin-top: auto; color: var(--accent); font-size: 0.85rem; }
    @media (max-width: 650px) { .toolGrid { grid-template-columns: 1fr; } }
`;
const About = styled.section`
    max-width: 750px; padding-bottom: 36px;
    .eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h2 { margin: 9px 0 12px; color: var(--text); font-size: clamp(1.8rem, 4vw, 3rem); }
    p { color: var(--muted); font-size: 1rem; }
`;
export const Styled = { Wrapper, Hero, Section, About };
