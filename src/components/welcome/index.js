import React, { Component } from "react";
import quote from "./welcome";
import generateStar from "./generate-star";
import styles from "./styles.css";

class Welcome extends Component {
  componentDidMount() {
    const canvas = document.getElementById("space");
    const context = canvas.getContext("2d");

    const onresize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    onresize();

    for (let i = 0; i < 500; i++) {
      generateStar(canvas, context, 3);
    }
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Universe</h1>
          <p>
            {quote}
            <span>- Douglas Adams</span>
          </p>
        </div>
        <canvas id="space" className={styles.space} />
      </div>
    );
  }
}

export default Welcome;
