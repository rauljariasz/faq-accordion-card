import React, { useState, useRef } from "react";
import illusMobile from "./assets/illustration-woman-online-mobile.svg";
import patternMobile from "./assets/bg-pattern-mobile.svg";
import arrow from "./assets/icon-arrow-down.svg";
import illusDesktop from "./assets/illustration-woman-online-desktop.svg";
import patternDesktop from "./assets/bg-pattern-desktop.svg";
import boxDesktop from "./assets/illustration-box-desktop.svg"
import "./styles/styles.scss";

const App = () => {
  /* STATES */
  const [toggleq1, setToggleq1] = useState(false)
  const [toggleq2, setToggleq2] = useState(true)
  const [toggleq3, setToggleq3] = useState(false)
  const [toggleq4, setToggleq4] = useState(false)
  const [toggleq5, setToggleq5] = useState(false)

  /* REF QUESTION */
  const question1 = useRef(null)
  const question2 = useRef(null)
  const question3 = useRef(null)
  const question4 = useRef(null)
  const question5 = useRef(null)

  /* REF ARROWS */
  const arrow1 = useRef(null)
  const arrow2 = useRef(null)
  const arrow3 = useRef(null)
  const arrow4 = useRef(null)
  const arrow5 = useRef(null)
  
  const handdleClickQ1 = () => {
    setToggleq1(!toggleq1)
    question1.current.classList.toggle('questionOpen');
    arrow1.current.classList.toggle('rotate');
    if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove('questionOpen');
      arrow2.current.classList.remove('rotate');
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove('questionOpen');
      arrow3.current.classList.remove('rotate');
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove('questionOpen');
      arrow4.current.classList.remove('rotate');
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove('questionOpen');
      arrow5.current.classList.remove('rotate');
    }
  }
  const handdleClickQ2 = () => {
    setToggleq2(!toggleq2)
    question2.current.classList.toggle('questionOpen')
    arrow2.current.classList.toggle('rotate')
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove('questionOpen')
      arrow1.current.classList.remove('rotate')
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove('questionOpen');
      arrow3.current.classList.remove('rotate')
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove('questionOpen');
      arrow4.current.classList.remove('rotate')
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove('questionOpen');
      arrow5.current.classList.remove('rotate');
    }
  }
  const handdleClickQ3 = () => {
    setToggleq3(!toggleq3)
    question3.current.classList.toggle('questionOpen')
    arrow3.current.classList.toggle('rotate')
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove('questionOpen')
      arrow1.current.classList.remove('rotate')
    } else if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove('questionOpen');
      arrow2.current.classList.remove('rotate')
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove('questionOpen');
      arrow4.current.classList.remove('rotate')
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove('questionOpen');
      arrow5.current.classList.remove('rotate');
    }
  }
  const handdleClickQ4 = () => {
    setToggleq4(!toggleq4)
    question4.current.classList.toggle('questionOpen')
    arrow4.current.classList.toggle('rotate')
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove('questionOpen')
      arrow1.current.classList.remove('rotate')
    } else if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove('questionOpen');
      arrow2.current.classList.remove('rotate')
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove('questionOpen');
      arrow3.current.classList.remove('rotate')
    } else if (toggleq5) {
      setToggleq5(!toggleq5);
      question5.current.classList.remove('questionOpen');
      arrow5.current.classList.remove('rotate');
    }
  }
  const handdleClickQ5 = () => {
    setToggleq5(!toggleq5)
    question5.current.classList.toggle('questionOpen')
    arrow5.current.classList.toggle('rotate')
    if (toggleq1) {
      setToggleq1(!toggleq1);
      question1.current.classList.remove('questionOpen')
      arrow1.current.classList.remove('rotate')
    } else if (toggleq2) {
      setToggleq2(!toggleq2);
      question2.current.classList.remove('questionOpen');
      arrow2.current.classList.remove('rotate')
    } else if (toggleq3) {
      setToggleq3(!toggleq3);
      question3.current.classList.remove('questionOpen');
      arrow3.current.classList.remove('rotate')
    } else if (toggleq4) {
      setToggleq4(!toggleq4);
      question4.current.classList.remove('questionOpen');
      arrow4.current.classList.remove('rotate')
    }
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

              <div className="container__faqContainer__questionBox" onClick={handdleClickQ1}>
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question" ref={question1} >
                    How many team members can I invite?
                  </p>
                  <img src={arrow} alt="" className="arrow" ref={arrow1}/>
                </div>
                { toggleq1 ? <div className="container__faqContainer__questionBox-answer">
                You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
                </div>: null }
              </div>

              <div className="container__faqContainer__questionBox" onClick={handdleClickQ2}>
                <div className="container__faqContainer__questionBox__flex">
                  <p className="questionOpen container__faqContainer__questionBox__flex-question" ref={question2}>
                    What is the maximum file upload size?
                  </p>
                  <img src={arrow} alt="" className="arrow rotate" ref={arrow2} />
                </div>
                { toggleq2 ? <div className="container__faqContainer__questionBox-answer">
                  No more than 2GB. All files in your account must fit your allotted storage space.
                </div>: null }
              </div>

              <div className="container__faqContainer__questionBox" onClick={handdleClickQ3}>
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question" ref={question3}>
                    How do I reset my password?
                  </p>
                  <img src={arrow} alt="" className="arrow" ref={arrow3} />
                </div>
                { toggleq3 ? <div className="container__faqContainer__questionBox-answer">
                  Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
                </div>: null }
              </div>

              <div className="container__faqContainer__questionBox" onClick={handdleClickQ4}>
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question" ref={question4}>
                    Can I cancel my subscription?
                  </p>
                  <img src={arrow} alt="" className="arrow" ref={arrow4} />
                </div>
                { toggleq4 ? <div className="container__faqContainer__questionBox-answer">
                  Yes! Send us a message and we'll process your request no questions asked.
                </div>: null }
              </div>

              <div className="container__faqContainer__questionBox" onClick={handdleClickQ5}>
                <div className="container__faqContainer__questionBox__flex">
                  <p className="container__faqContainer__questionBox__flex-question" ref={question5}>
                    Do you provide additional support?
                  </p>
                  <img src={arrow} alt="" className="arrow" ref={arrow5} />
                </div>
                { toggleq5 ? <div className="container__faqContainer__questionBox-answer">
                  Chat and email support is available 24/7. Phone lines are open during normal business hours.
                </div>: null }
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