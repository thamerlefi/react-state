import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Lefi Thamer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: require('./0.jpg'),
      profession: "Mern Stack Developer",
    },
    shows: false,
    fixTime: new Date(),
    mountTime: new Date(),
    intervalId: null,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
    this.setState({ intervalId, mountTime: new Date() });
  }


  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const timeSinceMount = Math.floor(
      ( this.state.mountTime - this.state.fixTime) / 1000
    );
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.shows && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} style={{width:150, height:150}}/>
            <p>{profession}</p>
          </div>
        )}
        <p>Mounted {timeSinceMount} seconds ago</p>
      </div>
    );
  }
}

export default App;
