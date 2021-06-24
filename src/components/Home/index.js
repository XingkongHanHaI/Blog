import React from "react";
import "./index.scss";
import homeUrl from "../../images/home.svg";
export default class HomePage extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="home-intro">
            <h1>Welcome to my Blog</h1>
            <p>
              A front-end Engineer
            </p>
            <p>
              Proficient in the spelling of HTML, CSS, JavaScript, webpack, Vue, React and other front-end technologies
            </p>
            <h1>A waste material</h1>
            <p>
              Heat in three minutes
            </p>
            <h1>
              A leek
            </h1>
            <p>
              Investing in stocks and funds
            </p>
            <h1>Can't speak English</h1>
            <p>
              Dou Shi Baidu Fan Yi
            </p>
            <div className="improving">
              <p>
                <span>No Github，No Weixin, No Juejin, Improving.....</span>
              </p>
            </div>
        </div>
        <div className="home-logo">
          <img src={homeUrl} alt="" />
        </div>
      </section>
    );
  }
}