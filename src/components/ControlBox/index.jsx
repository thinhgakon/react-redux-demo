import React from "react";
import "./ControlBox.css";
import { connect } from "react-redux";
class ControlBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const color = this.props.myHighlight ? "red" : "black";
    return (
      <div className="control-box-wrapper">
        <div className="comp-name">Controller Component</div>
        <div
          style={{ color: color }}
          className="change-color"
          onClick={() => {
            this.props.dispatch({ type: "CHANGE_COLOR" });
          }}
        >
          Change Color
        </div>
        <div className="btn-control">
          <div
            onClick={() => {
              this.props.dispatch({ type: "UP" });
            }}
            className="btn btn-cong"
          >
            +
          </div>
          <div
            onClick={() => {
              this.props.dispatch({ type: "DOWN" });
            }}
            className="btn btn-tru"
          >
            -
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myHighlight: state.highlight };
}

ControlBox.propTypes = {};

export default connect(mapStateToProps)(ControlBox);
