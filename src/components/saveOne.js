import React, { Component } from "react";
import { connect } from "react-redux";
import { saveOneAction } from "../actions/saveOne";

class SaveOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      location: "",
      error: false
    };
  }

  save = () => {
    const { name, age, location } = this.state;
    if (this.state.age === "") {
      this.setState({
        error: true
      });
    } else if (this.state.name === "") {
      this.setState({
        error: true
      });
    } else if (this.state.location === "") {
      this.setState({
        error: true
      });
    } else {
      this.setState({ error: false });
      this.props.SaveOne(name, age, location);
      this.setState({
        name: "",
        age: "",
        location: ""
      });
    }
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
        {this.state.error && (
          <p style={{ color: "red" }}>please fill out all details</p>
        )}
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
