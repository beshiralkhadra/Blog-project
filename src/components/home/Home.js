import React, { Component } from "react";
import BuildNewPost from "./BuildNewPost";
import "../home/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="write">
        <form className="write-post" onSubmit={this.props.willOnSubmit}>
          <div className="writeFormGroup">
            <input
              type="text"
              onChange={this.props.willOnChange}
              placeholder="Title"
              className="writeInput"
            />
          </div>

          <button className="submit-btn">puplish</button>
        </form>
      </div>
    );
  }
}

export default Home;
