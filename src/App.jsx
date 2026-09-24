import { lazy, Suspense, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import ScrollToTop from "./components/ScrollToTop";
import LinksWrapper from "./components/LinksWrapper";
import HelloWorld from "./apps/helloWorld";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/home"));
const Stopwatch = lazy(() => import("./apps/stopwatch"));
const NotFound = lazy(() => import("./pages/notFound"));

const PageLoader = () => (
    <Box sx={{ minHeight: "55vh", display: "grid", placeItems: "center", color: "var(--accent)" }}>
        <CircularProgress color="inherit" size={34} />
    </Box>
);

const App = () => {
    const [sliderOpen, setSliderOpen] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        document.body.style.overflow = sliderOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [sliderOpen]);

    useEffect(() => { setSliderOpen(false); }, [pathname]);

    return (
        <>
            <Styled.Wrapper>
                <Styled.Header>
                    <Styled.HeaderMain>
                        <Styled.Brand to="/" title="React Daily Tools home">
                            <img src={import.meta.env.BASE_URL + "logo.png"} alt="Ashish Ranjan logo" />
                            <span><small>A2RP</small>React Daily Tools</span>
                        </Styled.Brand>
                        <Styled.SliderLinkWrapper
                            type="button"
                            aria-label={sliderOpen ? "Close navigation" : "Open navigation"}
                            aria-expanded={sliderOpen}
                            onClick={() => setSliderOpen((value) => !value)}
                        >
                            <Styled.Line className={"line1 " + (sliderOpen ? "active" : "")} />
                            <Styled.Line className={"line2 " + (sliderOpen ? "active" : "")} />
                            <Styled.Line className={"line3 " + (sliderOpen ? "active" : "")} />
                        </Styled.SliderLinkWrapper>
                    </Styled.HeaderMain>
                </Styled.Header>
                <Styled.Main>
                    <ScrollToTop />
                    <Suspense key={pathname} fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/hello-world" element={<HelloWorld />} />
                            <Route path="/stopwatch" element={<Stopwatch />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </Styled.Main>
                <Styled.Footer><Footer /></Styled.Footer>
            </Styled.Wrapper>
            <Styled.SliderWrapper className={sliderOpen ? "active" : ""}>
                <button className="empty" type="button" aria-label="Close navigation" onClick={() => setSliderOpen(false)} />
                <div className="linksWrapper"><LinksWrapper onLinkClick={() => setSliderOpen(false)} /></div>
            </Styled.SliderWrapper>
        </>
    );
};

export default App;
