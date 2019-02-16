import React, { Component } from "react";
import { connect } from "react-redux";
import { saveOneAction } from "../actions/saveOne";

class SaveOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      location: ""
    };
  }

  save = () => {
    const { name, age, location } = this.state;
    this.props.SaveOne(name, age, location);
    this.setState({
      name: "",
      age: "",
      location: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h2>Save cat</h2>
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          placeholder="name"
          value={this.state.name}
        />
        <input
          name="age"
          onChange={this.handleChange}
          type="number"
          placeholder="age"
          value={this.state.age}
        />
        <input
          name="location"
          onChange={this.handleChange}
          type="text"
          placeholder="location"
          value={this.state.location}
        />
        <button onClick={this.save}>Save</button>
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
    SaveOne: (name, location, age) =>
      dispatch(saveOneAction(name, location, age))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveOne);
