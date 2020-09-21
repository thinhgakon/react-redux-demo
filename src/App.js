import React from 'react';
import './App.css';
import ControlBox from "./components/ControlBox";
import { connect } from 'react-redux';

function App(props) {
  const color = props.myHighlight ? "yellow" : "white";
  return (
    <div className="wrapper">
      <div className="infor-box">
        <div className="title">App Component</div>
        <div className="value" style={{ color: color }}>{props.myValue}</div>
      </div>
      <div className="control-box">
        <ControlBox />
      </div>
    </div >
  );
}

function mapStateToProps(state) {
  return {
    myValue: state.value,
    myHighlight: state.highlight
  };
}

export default connect(mapStateToProps)(App);
