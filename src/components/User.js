import React, { Component } from "react";
import axios from "axios";
import "./main.css";

class User extends Component {
  state = {
    username: [],
    followers: [],
    repos: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/daaavit").then((res) => {
      this.setState({
        username: res.data.login,
        followers: res.data.followers,
        repos: res.data.public_repos,
      });
    });
  }

  render() {
    return (
      <div className="main_wrapper">
        <div className="h1_heading">
          <h1>GITHUB INFO</h1>
        </div>
        <div className="from_wrapper">
          <form>
            <button className="button_style">Github Handle</button>
            <input
              className="input"
              type="text"
              placeholder="...Search for details"
            />
          </form>
        </div>
        <div className="user_wrapper">
          <div>
            <img width="120px" src="https://bit.ly/3tyvItR" alt="avatar" />
          </div>
          <div className="user_info">
            <h3>{this.state.username}</h3>
            <h3>TOTAL REPOS: {this.state.repos}</h3>
            <h3>TOTAL FOLLOWERS: {this.state.followers}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
