import React from "react";
import { HashLoader } from "react-spinners";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <HashLoader
          sizeUnit={"px"}
          size={190}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
