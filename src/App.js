import React, { useState, useRef } from "react";
import illusMobile from "./assets/illustration-woman-online-mobile.svg";
import patternMobile from "./assets/bg-pattern-mobile.svg";
import arrow from "./assets/icon-arrow-down.svg";
import illusDesktop from "./assets/illustration-woman-online-desktop.svg";
import patternDesktop from "./assets/bg-pattern-desktop.svg";
import boxDesktop from "./assets/illustration-box-desktop.svg"
import "./styles/styles.scss";

const App = () => {
  const [toggle, setToggle] = useState(true)
  const questionOpen = useRef(null)
  const arrowRotate = useRef(null)
  
  const handdleClick = () => {
    setToggle(!toggle)
    questionOpen.current.classList.toggle('questionOpen')
    arrowRotate.current.classList.toggle('rotate')
  }

  return (
    <>
      <main>
        <div className="flex">
          <img src={boxDesktop} alt="" className="boxDesktop" />
          <div className="container">
            <div className="container__imgContainer">
              <figure>
                <img src={illusMobile} alt="" className="illusMobile" />
                <img src={patternMobile} alt="" className="patternMobile" />
                <img src={illusDesktop} alt="" className="illusDesktop" />
                <img src={patternDesktop} alt="" className="patternDesktop" />
              </figure>
            </div>


            <div className="container__faqContainer">
              <h1 className="container__faqContainer-title">FAQ</h1>

              <div className="container__faqContainer__questionBox">
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question">
                    How many team members can I invite?
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </div>

              <div className="container__faqContainer__questionBox" onClick={handdleClick}>
                <div className="container__faqContainer__questionBox__flex">
                  <p className="questionOpen container__faqContainer__questionBox__flex-question" ref={questionOpen}>
                    What is the maximum file upload size?
                  </p>
                  <img src={arrow} alt="" className="rotate arrow" ref={arrowRotate} />
                </div>
                { toggle ? <div className="container__faqContainer__questionBox-answer">
                  No more than 2GB. All files in your account must fit your allotted storage space.
                </div>: null }
              </div>

              <div className="container__faqContainer__questionBox">
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question">
                    How do I reset my password?
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </div>

              <div className="container__faqContainer__questionBox">
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question">
                    Can I cancel my subscription?
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </div>

              <div className="container__faqContainer__questionBox">
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question">
                    Do you provide additional support?
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>


      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/rauljariasz" target="_blank">Raul Arias</a>.
        </div>
      </footer>
    </>
  );
};

export default App;