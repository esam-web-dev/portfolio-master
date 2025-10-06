import { useEffect, useState } from "react";
import { Contact, Home, Layout, PortfolioDetails, Resume, Service, Skill, Testimonial } from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

          <div className="preloader-heading">
            <div className="load-text">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
      )}

      {!showLoader && (
        <>
          <BrowserRouter basename="/portfolio-master/"> 
            <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
              <Route
                path="/details"
                element={
                  <Layout>
                    <PortfolioDetails />
                  </Layout>
                }
              />
              <Route
                path="/service"
                element={
                  <Layout>
                    <Service/>
                  </Layout>
                }
              />
              <Route
                path="/resume"
                element={
                  <Layout>
                    <Resume/>
                  </Layout>
                }
              />
              <Route
                path="/contact"
                element={
                  <Layout>
                    <Contact/>
                  </Layout>
                }
              />
              <Route
                path="/testimonials"
                element={
                  <Layout>
                    <Testimonial/>
                  </Layout>
                }
              />
              <Route
                path="/skill"
                element={
                  <Layout>
                    <Skill/>
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
