import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        padding: 18px 20px;
        color: var(--muted);
        border: 1px solid var(--border);
        border-radius: 15px;
        background: var(--card);
        .top, .bottom { display: flex; align-items: center; justify-content: space-between; gap: 18px; }
        .top { padding-bottom: 15px; }
        strong { color: var(--text); } p { margin-top: 3px; font-size: 0.82rem; }
        .groups { display: flex; gap: 22px; } .groups > div { display: grid; gap: 6px; }
        .groups span { color: var(--text); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
        .iconLinks { display: flex; flex-wrap: wrap; gap: 5px; }
        .iconLinks a { width: 29px; height: 29px; display: grid; place-items: center; color: var(--muted); border: 1px solid var(--border); border-radius: 7px; transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
        .iconLinks a:hover { color: var(--accent); border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        .bottom { padding-top: 13px; border-top: 1px solid var(--border); font-size: 0.76rem; }
        .bottom a { color: var(--text); font-weight: 700; } .bottom a:hover { color: var(--accent); }
        @media (max-width: 720px) { .top, .bottom { align-items: flex-start; flex-direction: column; } .groups { flex-wrap: wrap; } }
    `,
};
