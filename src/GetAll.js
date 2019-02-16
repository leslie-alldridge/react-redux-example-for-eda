import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./loading";
import { getAllAction } from "./actions/getAll";

class GetAll extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getAll();
  };

  getAll = () => {
    this.props.getAll();
  };

  render() {
    return (
      <div>
        {this.props.state.cats.loading && <Loading />}
        {!this.props.state.cats.loading && (
          <ul>
            {this.props.state.cats.catData &&
              this.props.state.cats.catData.map(cat => {
                return (
                  <li key={cat.id}>
                    id: {cat.id} - name: {cat.name} - location: {cat.location} -
                    age: {cat.age}
                  </li>
                );
              })}
          </ul>
        )}
        <button onClick={this.getAll}>Get All Button</button>
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
    getAll: () => dispatch(getAllAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAll);
