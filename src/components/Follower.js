import React, { Component } from "react";
import axios from "axios";
import './main.css'

class Follower extends Component {
  state = {
    followersImg: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/daaavit/followers").then((res) => {
      console.log(res.data);
      this.setState({
        ...this.state,
        followersImg: res.data,
      });
    });
  }

  render() {
    return (
      <div className="main_div">
        <div>
          <h1>FOLLOWERS:</h1>
        </div>
        <div className="image_name">
          {this.state.followersImg.map((image) => {
            return (
                <div>
              <img
                key={1 + Math.random()}
                width="200px"
                src={image.avatar_url}
              />
              {image.login}
              </div>

            );
          })}
        </div>
      </div>
    );
  }
}

export default Follower;
