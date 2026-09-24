import { createElement } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdClear, MdHome, MdTimer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
    { to: "/", label: "Home", icon: MdHome },
    { to: "/hello-world", label: "Hello World", icon: MdHome },
    { to: "/stopwatch", label: "Stopwatch", icon: MdTimer },
];

const LinksWrapper = ({ onLinkClick }) => {
    const [searchText, setSearchText] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const onKey = (event) => {
            if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const filteredLinks = useMemo(() => {
        const query = searchText.trim().toLowerCase();
        return query ? links.filter((link) => link.label.toLowerCase().includes(query)) : links;
    }, [searchText]);

    return (
        <Styled.Wrapper>
            <div className="intro"><span>TOOLS</span><strong>Choose a tool</strong></div>
            <Styled.SearchWrapper>
                <input ref={inputRef} value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="Search tools" aria-label="Search tools" />
                {searchText && <button type="button" onClick={() => setSearchText("")} aria-label="Clear search"><MdClear /></button>}
            </Styled.SearchWrapper>
            <Styled.LinksListWrapper>
                {filteredLinks.length === 0 ? <div className="empty">No matching tools.</div> : filteredLinks.map(({ to, label, icon: Icon }) => (
                    <NavLink key={to} to={to} end={to === "/"} onClick={onLinkClick}>
                        {createElement(Icon, { "aria-hidden": true })}<span>{label}</span>
                    </NavLink>
                ))}
            </Styled.LinksListWrapper>
        </Styled.Wrapper>
    );
};

const Styled = {
    Wrapper: styled.div`
        height: 100%;
        .intro { display: grid; gap: 3px; margin-bottom: 14px; }
        .intro span { color: var(--accent); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; }
        .intro strong { color: var(--text); font-size: 1.1rem; }
    `,
    SearchWrapper: styled.label`
        position: relative; display: block;
        input { padding-right: 42px; }
        button { position: absolute; top: 50%; right: 5px; width: 32px; height: 32px; display: grid; place-items: center; padding: 0; color: var(--muted); border: 0; background: transparent; transform: translateY(-50%); }
    `,
    LinksListWrapper: styled.nav`
        display: grid; gap: 7px; height: calc(100% - 100px); margin-top: 14px; overflow: auto; scrollbar-gutter: stable;
        a { display: flex; align-items: center; gap: 10px; padding: 12px; color: var(--muted); border: 1px solid transparent; border-radius: 10px; transition: color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease; }
        a:hover, a.active { color: var(--accent); border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
        a svg { font-size: 20px; } .empty { padding: 12px; color: var(--muted); }
    `,
};

export default LinksWrapper;
