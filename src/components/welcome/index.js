import React, { Component } from "react";
import styles from "./styles.css";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Sauna</h1>
          <p>No one has ever drowned in sweat.</p>
          <img
            height="400"
            width="400"
            src="http://stimulating-soap.surge.sh/sauna.jpg"
            alt="sauns"
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
