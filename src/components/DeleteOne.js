import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteOneAction } from "../actions/deleteOne";

class DeleteOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  deleteOne = () => {
    this.props.deleteOne(this.state.num);
  };

  handleChange = e => {
    this.setState({
      num: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Delete cat :(</h2>
        <input
          onChange={this.handleChange}
          type="number"
          placeholder="enter id here"
        />
        <button onClick={this.deleteOne}>Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteOne: id => dispatch(deleteOneAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteOne);
