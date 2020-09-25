import React, { Component } from "react";
import { connect } from "react-redux";
import { addaction, subaction } from "../../Action/index";
import { Link } from "react-router-dom";

class Addition extends Component {
  render() {
    console.log(this.props);
    const { Count } = this.props.st;
    return (
      <div>
        <Link to="/test"> Hello </Link>
        <h1>Addition Component: {Count} </h1>
        <button onClick={this.props.ad}>Add</button>
        <button onClick={this.props.sb}>Sub</button>
      </div>
    );
  }
}

const mapstatetoprops = (state) => {
  return {
    st: state.addReducer,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return {
    ad: () => dispatch(addaction()),
    sb: () => dispatch(subaction()),
  };
};

export default connect(mapstatetoprops, mapdispatchtoprops)(Addition);
