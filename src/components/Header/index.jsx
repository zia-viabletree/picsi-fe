import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Images } from "../../theme";
import "./styles.scss";

const Header = () => {
  // const [scroll, setScroll] = useState(0);
  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY; // => scroll position
  //   setScroll(scrollPosition);
  // };
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  //STATES
  const [navOpen, setNavOpen] = useState(false);

  //HANDLERS
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  //HANDLERS
  const navOpenToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <header className="main-header">
      <div className="container">
        {/* <div className={`nav-box`}> */}
        {/* <Row align={"middle"}>
            <Col xl={5} xs={18}>
              <div className="logo c-p" onClick={scrollToTop}>
                <img src={Images.Logo} alt="logo" />
                <div>
                  <h3>Picsi.Ai</h3>
                  <p> Powered by InsightFace</p>
                </div>
              </div>
            </Col>
            <Col xs={6} xl={1} className="toggle-wrapper">
              <button
                className={`togglebtn c-p ${navOpen ? "active" : ""}`}
                onClick={navOpenToggle}
              >
                <span />
                <span />
                <span />
              </button>
            </Col>
            <Col md={24} lg={18}>
              <div className={`options-wrapper ${navOpen ? "active" : ""}`}>
                <ul className="header-options btn-wrapper">
                  <li>
                    <a
                      href="#"
                      onClick={() => setNavOpen(false)}
                      className="social discord-btn c-p"
                    >
                      Face Swap Web App
                    </a>
                    <span className="badge">New</span>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      onClick={() => setNavOpen(false)}
                      className="social patreon-btn c-p"
                    >
                      Face Swap on Discord
                    </a>
                  </li>
                </ul>
                <div className="seperator" />
                <div className="btn-wrapper">
                  <a
                    className="social discord-btn c-p"
                    target="_blank"
                    href="https://discord.com/invite/Ym3X8U59ZN"
                  >
                    <img src={Images.Discord} alt="patreon" />
                    <span>Need Help? Join Us on Discord</span>
                  </a>
                  <a
                    className="social patreon-btn c-p"
                    href="https://www.patreon.com/picsi"
                    target="_blank"
                  >
                    <img src={Images.Patreon} alt="patreon" />
                    <span>Unlock Advanced Features with Patreon</span>
                  </a>
                  <a href="#" className="social sign-up-btn discord-btn c-p">
                    Stripe upgrade
                  </a>
                  <a href="#" className="social sign-up-btn patreon-btn c-p">
                    Sign-in / Sign-up
                  </a>
                </div>
              </div>
            </Col>
          </Row> */}

        <Row className="top-header-main-wrapper">
          <Col className="top-header-wrapper">
            <a
              href="https://discord.com/invite/Ym3X8U59ZN"
              className="top-header-btns"
              target="_blank"
            >
              <img src={Images.Discord} />
              <span>Need Help? Join Us on Discord</span>
            </a>
            <div className="seperator" />
            <a
              href="https://www.patreon.com/picsi"
              target="_blank"
              className="patreon-btn top-header-btns"
            >
              <img src={Images.Patreon} />
              <span>Unlock Advanced Features with Patreon</span>
            </a>
            <div className="seperator" />
            <a href="#" className="stripe-btn top-header-btns">
              <img src={Images.stripe} />
              <span>Unlock Advanced Features with Stripe</span>
            </a>
          </Col>
        </Row>

        <Row className="header-main-wrapper">
          <Col className="header-wrapper">
            <a href="#">
              <img src={Images.headerLogo} alt="logo" />
            </a>

            <div className={`header-btn-wrapper ${navOpen ? "active" : ""}`}>
              <a
                href="#"
                className="face-wrap-btn"
                onClick={() => setNavOpen(false)}
              >
                <span>Face Swap Web App</span>
                <span className="badge">New</span>
              </a>
              <div className="seperator" />

              <a
                href="#faq"
                className="face-wrap-discord-btn"
                onClick={() => setNavOpen(false)}
              >
                <img src={Images.Discord} />
                <span>Face Swap On Discord</span>
              </a>

              <div className="seperator desktop-none" />

              <a
                href="https//discord.com/invite/Ym3X8U59ZN"
                target="_blank"
                className="top-header-btns desktop-none"
                onClick={() => setNavOpen(false)}
              >
                <img src={Images.Discord} />
                <span>Need Help? Join Us on Discord</span>
              </a>
              <div className="seperator desktop-none" />

              <a
                href="https://www.patreon.com/picsi"
                target="_blank"
                className="patreon-btn top-header-btns desktop-none"
                onClick={() => setNavOpen(false)}
              >
                <img src={Images.Patreon} />
                <span>Unlock Advanced Features with Patreon</span>
              </a>

              <div className="seperator desktop-none" />

              <a
                href="#"
                className="stripe-btn top-header-btns desktop-none"
                onClick={() => setNavOpen(false)}
              >
                <img src={Images.stripe} />
                <span>Unlock Advanced Features with Stripe</span>
              </a>

              <div className="seperator" />

              <a
                href="#"
                className="login-btn"
                onClick={() => setNavOpen(false)}
              >
                <img src={Images.Profile} />
                <span>Login</span>
              </a>
            </div>

            <div className="toggle-wrapper">
              <button
                className={`togglebtn c-p ${navOpen ? "active" : ""}`}
                onClick={navOpenToggle}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </Col>
        </Row>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
