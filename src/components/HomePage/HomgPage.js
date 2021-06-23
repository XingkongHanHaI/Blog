import React from "react";
import "./index.css";
import homeUrl from "../../images/home.svg";
import { CSSTransition } from "react-transition-group";
export default class HomePage extends React.Component {
  render() {
    return (
      <section>
        <div className="welcome">
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <h1>Welcome to my Blog</h1>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <p>
              A front-end Engineer
            </p>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <p>
              Proficient in the spelling of HTML, CSS, JavaScript, webpack, Vue, React and other front-end technologies
            </p>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <h1>A waste material</h1>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <p>
              Heat in three minutes
            </p>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <h1>
              A leek
            </h1>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <p>
              Investing in stocks and funds
            </p>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <h1>Can't speak English</h1>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <p>
              Dou Shi Baidu Fan Yi
            </p>
          </CSSTransition>
          <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
            <div className="outline-wrap">
              <p>
                <span>No Github，No Weixin, No Juejin, Improving.....</span>
              </p>
            </div>
          </CSSTransition>
        </div>
        <CSSTransition in={true} timeout={2000} unmountOnExit classNames="intro" appear={true}>
          <div className="logo-wrap">
            <img className="logo" src={homeUrl} alt="" />
          </div>
        </CSSTransition>
      </section>
    );
  }
}