import { useEffect, useMemo, useState } from "react";
import { MdFlag, MdPause, MdPlayArrow, MdReplay } from "react-icons/md";
import styled from "styled-components";

const formatTime = (value) => {
    const minutes = Math.floor(value / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((value % 60000) / 1000).toString().padStart(2, "0");
    const milliseconds = Math.floor((value % 1000) / 10).toString().padStart(2, "0");
    return minutes + ":" + seconds + "." + milliseconds;
};

const Stopwatch = () => {
    const [elapsed, setElapsed] = useState(0);
    const [running, setRunning] = useState(false);
    const [startedAt, setStartedAt] = useState(null);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        if (!running) return undefined;
        const timer = window.setInterval(() => setElapsed(Date.now() - startedAt), 10);
        return () => window.clearInterval(timer);
    }, [running, startedAt]);

    const currentTime = useMemo(() => formatTime(elapsed), [elapsed]);
    const toggleRunning = () => {
        if (running) { setRunning(false); return; }
        setStartedAt(Date.now() - elapsed);
        setRunning(true);
    };
    const reset = () => { setRunning(false); setElapsed(0); setStartedAt(null); setLaps([]); };
    const addLap = () => setLaps((current) => [elapsed, ...current]);

    return (
        <Wrapper>
            <span className="eyebrow">TIMEKEEPER</span>
            <h1>Stopwatch</h1>
            <div className="timer" aria-live="polite">{currentTime}</div>
            <div className="actions">
                <button type="button" onClick={toggleRunning}>{running ? <MdPause /> : <MdPlayArrow />}{running ? "Pause" : "Start"}</button>
                <button type="button" className="quiet" onClick={addLap} disabled={!elapsed}><MdFlag />Lap</button>
                <button type="button" className="quiet" onClick={reset}><MdReplay />Reset</button>
            </div>
            <div className="laps">
                <h2>Laps <span>{laps.length}</span></h2>
                {laps.length ? laps.map((lap, index) => <div key={lap + "-" + index}><span>Lap {laps.length - index}</span><strong>{formatTime(lap)}</strong></div>) : <p>Start the timer and record a lap when you are ready.</p>}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    max-width: 760px; padding: 40px 0;
    .eyebrow { color: var(--accent); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; }
    h1 { margin: 10px 0 24px; color: var(--text); font-size: clamp(2.7rem, 7vw, 5.4rem); line-height: 0.95; }
    .timer { padding: 28px; color: var(--text); border: 1px solid var(--border); border-radius: 16px; background: var(--card); font-family: ui-monospace, monospace; font-size: clamp(3.2rem, 12vw, 8rem); letter-spacing: 0.03em; text-align: center; }
    .actions { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 16px; }
    button { display: inline-flex; align-items: center; gap: 7px; } button svg { font-size: 19px; } .quiet { color: var(--muted); background: transparent; }
    .laps { margin-top: 34px; padding: 20px; border: 1px solid var(--border); border-radius: 14px; background: var(--card); }
    h2 { display: flex; justify-content: space-between; color: var(--text); font-size: 1.2rem; } h2 span { color: var(--accent); font-size: 0.8rem; }
    .laps div { display: flex; justify-content: space-between; padding: 11px 0; color: var(--muted); border-bottom: 1px solid var(--border); }
    .laps div:last-child { border-bottom: 0; } .laps strong { color: var(--text); font-family: ui-monospace, monospace; } .laps p { margin-top: 12px; color: var(--muted); }
`;

export default Stopwatch;
