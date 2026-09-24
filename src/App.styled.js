import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        color: var(--text);
        background: var(--bg);
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 1000;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--border);
        background: var(--bg);
    `,
    HeaderMain: styled.div`
        width: min(100%, 1180px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        @media (max-width: 640px) { padding: 0 14px; }
    `,
    Brand: styled(NavLink)`
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--text);
        text-decoration: none;
        transition: color 0.2s ease, text-shadow 0.2s ease;
        &:hover { color: var(--accent); text-shadow: 0 0 15px var(--accent-soft); }
        img { width: 38px; height: 38px; object-fit: contain; border: 1px solid var(--border); border-radius: 10px; }
        span { display: grid; gap: 0; font-weight: 700; }
        small { color: var(--muted); font-size: 9px; letter-spacing: 0.16em; }
    `,
    SliderLinkWrapper: styled.button`
        position: relative;
        width: 44px;
        height: 42px;
        padding: 0;
        cursor: pointer;
        border-color: var(--border);
        background: var(--card);
        &:hover { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
    `,
    Line: styled.span`
        position: absolute;
        left: 10px;
        right: 10px;
        height: 2px;
        background: var(--muted);
        transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
        &.line1 { top: 13px; }
        &.line2 { top: 20px; }
        &.line3 { top: 27px; }
        &.active { background: var(--accent); }
        &.line1.active { transform: translateY(7px) rotate(45deg); }
        &.line2.active { opacity: 0; }
        &.line3.active { transform: translateY(-7px) rotate(-45deg); }
    `,
    Main: styled.main`
        width: min(100%, 1180px);
        min-height: calc(100vh - 140px);
        margin: 0 auto;
        padding: 106px 24px 56px;
        @media (max-width: 640px) { padding: 96px 14px 40px; }
    `,
    Footer: styled.footer`
        width: min(100%, 1180px);
        margin: 0 auto;
        padding: 0 24px 24px;
        @media (max-width: 640px) { padding: 0 14px 16px; }
    `,
    FooterMain: styled.div`height: 1px;`,
    SliderWrapper: styled.div`
        position: fixed;
        inset: 72px 0 0;
        z-index: 1100;
        display: flex;
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.62);
        transition: opacity 0.2s ease, visibility 0.2s ease;
        &.active { visibility: visible; opacity: 1; pointer-events: auto; }
        .empty { flex: 1; width: auto; height: 100%; padding: 0; border: 0; border-radius: 0; background: transparent; }
        .linksWrapper { flex: 0 0 min(340px, 88vw); padding: 18px; overflow: hidden; border-left: 1px solid var(--border); background: var(--card); }
        @media (max-width: 640px) { .linksWrapper { flex-basis: min(310px, 92vw); padding: 14px; } }
    `,
};
