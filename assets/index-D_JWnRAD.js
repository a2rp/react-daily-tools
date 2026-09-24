import{d as a,j as e,N as o,M as s,a as p,b as x,r as m}from"./index-ahDmROxk.js";const h=a.div`display: grid; gap: 64px;`,g=a.section`
    padding: clamp(30px, 7vw, 78px) clamp(22px, 6vw, 70px);
    border: 1px solid var(--border); border-radius: 18px; background: radial-gradient(circle at 90% 12%, var(--accent-soft), transparent 34%), var(--card);
    .eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h1 { max-width: 720px; margin: 12px 0 16px; color: var(--text); font-size: clamp(2.6rem, 7vw, 6.4rem); line-height: 0.96; }
    p { max-width: 630px; margin-bottom: 28px; color: var(--muted); font-size: 1.05rem; }
    .primaryButton { display: inline-flex; align-items: center; gap: 8px; padding: 12px 16px; color: var(--text); border: 1px solid var(--border); border-radius: 10px; background: transparent; }
    .primaryButton:hover { color: var(--accent); border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
`,v=a.section`
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
`,u=a.section`
    max-width: 750px; padding-bottom: 36px;
    .eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h2 { margin: 9px 0 12px; color: var(--text); font-size: clamp(1.8rem, 4vw, 3rem); }
    p { color: var(--muted); font-size: 1rem; }
`,r={Wrapper:h,Hero:g,Section:v,About:u},i=[{to:"/hello-world",title:"Hello World",description:"A small route to verify the app shell and navigation.",icon:p,tag:"Starter"},{to:"/stopwatch",title:"Stopwatch",description:"Track elapsed time with start, pause, reset and lap actions.",icon:x,tag:"Utility"}],f=()=>e.jsxs(r.Wrapper,{children:[e.jsxs(r.Hero,{children:[e.jsx("span",{className:"eyebrow",children:"A SMALL TOOLBOX FOR EVERYDAY WORK"}),e.jsx("h1",{children:"Useful tools, kept simple."}),e.jsx("p",{children:"React Daily Tools is a compact collection of focused frontend experiments that are easy to open, understand and use."}),e.jsxs(o,{className:"primaryButton",to:"/stopwatch",children:["Open stopwatch ",e.jsx(s,{"aria-hidden":"true"})]})]}),e.jsxs(r.Section,{children:[e.jsxs("div",{className:"sectionHeader",children:[e.jsxs("div",{children:[e.jsx("span",{className:"eyebrow",children:"AVAILABLE NOW"}),e.jsx("h2",{children:"Pick a tool"})]}),e.jsxs("span",{className:"count",children:[i.length," tools"]})]}),e.jsx("div",{className:"toolGrid",children:i.map(({to:t,title:n,description:c,icon:l,tag:d})=>e.jsxs(o,{to:t,className:"toolCard",children:[e.jsx("div",{className:"icon",children:m.createElement(l,{"aria-hidden":!0})}),e.jsx("span",{className:"tag",children:d}),e.jsx("h3",{children:n}),e.jsx("p",{children:c}),e.jsxs("span",{className:"cardLink",children:["Open tool ",e.jsx(s,{"aria-hidden":"true"})]})]},t))})]}),e.jsxs(r.About,{children:[e.jsx("span",{className:"eyebrow",children:"ABOUT THE COLLECTION"}),e.jsx("h2",{children:"Small interfaces, practical lessons."}),e.jsx("p",{children:"Each route is intentionally lightweight and responsive, making this repository a place to explore reusable React patterns and everyday UI details."})]})]});export{f as default};
