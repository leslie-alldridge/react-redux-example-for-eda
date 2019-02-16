import React, { Component } from "react";
import { connect } from "react-redux";
import { editOneAction } from "../actions/editOne";

class EditOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      age: 0,
      location: "",
      error: false
    };
  }

  save = () => {
    const { id, name, age, location } = this.state;
    this.props.EditOne(id, name, age, location);
    this.setState({
      id: 0,
      name: "",
      age: 0,
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
        <h2>Edit cat</h2>
        {this.state.error && (
          <p style={{ color: "red" }}>please fill out all details</p>
        )}
        <p style={{ color: "red" }}>{this.props.state.cats.err2}</p>
        <input
          name="id"
          onChange={this.handleChange}
          type="number"
          placeholder="id"
          value={this.state.id}
        />
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
    EditOne: (id, name, location, age) =>
      dispatch(editOneAction(id, name, location, age))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditOne);
