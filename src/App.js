import React from "react";
import Follower from "./components/Follower";
import User from "./components/User";


class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <User />
        </div>
        <div>
          <Follower />
        </div>
      </div>
    );
  }
}

export default App;
