import React from "react";
import "./clock.css";
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  // 更新计时器
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className="clock-wrap">
        <span>当前时间：{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}