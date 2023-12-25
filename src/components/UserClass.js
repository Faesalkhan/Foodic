import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        login: "dummy name",
        url: "dummy url",
      },
    };
  }
  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/Faesalkhan");
  //   const json = await data.json();
  //   console.log(json);
  //   this.setState({
  //     userinfo: json,
  //   });
  // }
  componentDidUpdate() {
    console.log("calling after re-rendering");
  }
  componentWillUnmount() {
    console.log("will unmount after clicking on other link");
  }
  render() {
    const { login, url } = this.state.userinfo;
    return (
      <div className="about">
        <h1>About</h1>
        <h2>Name : {login}</h2>
        <h2>location: {url}</h2>
      </div>
    );
  }
}

export default UserClass;
