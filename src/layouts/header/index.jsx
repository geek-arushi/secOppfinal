import Button from "../../components/button";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import { Fragment, useEffect, useState } from "react";
import MobileMenu from "../../components/menu/mobile-menu";
import MenuOverlay from "../../components/menu/menu-overlay";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(null);

  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };

  useEffect(() => {
    const header = document.querySelector(".sticky-header");
    if (header) {
      setHeaderTop(header.offsetTop);
    }

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <header className="header">
        <style>
          {`
            .custom-hover:hover {
              background-color: #fd7d11 !important;
              color: white !important;
            }

            .custom-hover-orange {
              background-color: #fd7d11 !important;
              color: white !important;
            }

            .custom-hover-orange:hover {
              background-color: white !important;
              color: #fd7d11 !important;
              border: 1px solid orange !important;
            }

            .bg-primary {
              background-color: #00213e !important;
            }

            .hamburger-icon {
              cursor: pointer;
              width: 40px;
              height: 40px;
            }

            .hamburger-icon path {
              stroke: black;
              stroke-width: 30;
              fill: none;
            }

            @media (max-width: 991px) {
              .hamburger-icon path {
                stroke: #fd7d11;
              }
            }
          `}
        </style>

        {/* Header Middle */}
        <div className="header-middle mobile-sticky">
          <div className="container">
            <div className="col-6">
              <div className="header-middle-content d-flex align-items-center justify-content-between">
                <div className="header-logo">
                  <Logo image={`${process.env.PUBLIC_URL}/img/logo.png`} />
                </div>
                <Button
                  path="https://secopp.jotform.com/app/242645877128972"
                  classOption="book-now-btn d-none d-sm-inline-block d-lg-none"
                  text="LogIn / SignUp"
                />
                {/* Updated Hamburger */}
                <div className="mobile-menu-toggle d-lg-none">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="offcanvas-toggle border-0 bg-transparent p-0"
                    aria-label="Toggle mobile menu"
                  >
                    <svg viewBox="0 0 800 600" className="hamburger-icon">
                      <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                      <path d="M300,320 L540,320" id="middle" />
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        id="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header Bottom */}
        <div className="header-bottom d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <MainMenu classOption="small-menu" />
                  <Button
                    path="https://secopp.jotform.com/app/242645877128972"
                    classOption="book-now-btn"
                    text="LogIn / SignUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header on Scroll */}
        <div
          className={`header-bottom sticky-header d-none d-lg-block ${
            headerTop !== null && scroll > headerTop ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-top justify-content-between">
                  <div className="header-logo2">
                    <Logo image={`${process.env.PUBLIC_URL}/img/logo.png`} />
                  </div>
                  <MainMenu classOption="small-menu" />
                  <Button
                    path="https://secopp.jotform.com/app/242645877128972"
                    classOption="book-now-btn"
                    text="LogIn / SignUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Menu & Overlay */}
        <>
          {isMobileMenuOpen && (
            <div
              role="button"
              tabIndex={0}
              className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
              style={{ zIndex: 1040 }}
              onClick={() => setIsMobileMenuOpen(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsMobileMenuOpen(false);
                }
              }}
            ></div>
          )}

          <div
            className={`position-fixed top-0 end-0 h-100 bg-primary shadow-lg transition`}
            style={{
              width: "260px",
              zIndex: 1050,
              transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-link position-absolute top-0 end-0 m-3 text-white"
            >
              <i className="bi bi-x-lg fs-4">X</i>
            </button>

            <ul className="list-unstyled text-center mt-5 px-3">
              <li className="mb-3">
                <a href="/" className="btn w-100 text-black bg-white border-0 custom-hover">
                  HOME
                </a>
              </li>
              <li className="mb-3">
                <a href="/service" className="btn w-100 text-black bg-white border-0 custom-hover">
                  SERVICES
                </a>
              </li>
              <li className="mb-3">
                <a href="/blog" className="btn w-100 text-black bg-white border-0 custom-hover">
                  BLOG & NEWS
                </a>
              </li>
              <li className="mb-3">
                <a href="/how-it-works" className="btn w-100 text-black bg-white border-0 custom-hover">
                  HOW IT WORKS
                </a>
              </li>
              <li className="mb-3">
                <a href="/contact" className="btn w-100 text-black bg-white border-0 custom-hover">
                  CONTACT
                </a>
              </li>
              <li className="mb-3">
                <a href="/faq" className="btn w-100 text-black bg-white border-0 custom-hover">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://secopp.jotform.com/app/242645877128972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-100 border-0 custom-hover-orange"
                >
                  LOGIN / SIGNUP
                </a>
              </li>
            </ul>
          </div>
        </>
      </header>

      <MenuOverlay show={ofcanvasShow} />
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </Fragment>
  );
};

export default Header;
