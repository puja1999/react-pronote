import React from "react";
import "./Editor.css";
class Editor extends React.Component {
  constructor(props) {
    super(props);
    // to bind the method with event handler without ().
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  //event handler method to change the state.
  //setState is used to change the state
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  //call the handleChanges method in the onChange event and set the default value as empty
  render() {
    return (
      <>
        <div className="container">
          <div className="input">
            <h3 className="left-header">Input</h3>
            <textarea
              className="input-text"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </div>
          <div className="output">
            <h3 className="right-header">Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Editor;
