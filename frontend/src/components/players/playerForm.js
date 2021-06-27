import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", email: "" };
    this.submitPlayer = this.submitPlayer.bind(this);
  }

  submitPlayer(event) {
    const url = "http://localhost:4000/players";
    event.preventDefault();
    axios
      .post(url, { ...this.state })
      .then((resp) => console.log(resp))
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    console.log("Form rendered");
    return (
      <div className="row">
        <h1 className="center">Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer}>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    firstName: event.target.value,
                  });
                }}
                type="text"
              />
            </div>
            <div className="input-field col s6">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    lastName: event.target.value,
                  });
                }}
                type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                onChange={(event) => {
                  this.setState({
                    ...this.state,
                    email: event.target.value,
                  });
                }}
                type="text"
              />
            </div>
          </div>
          <input
            className="btn waves-effect waves-light"
            type="submit"
            value="Add Player"
          />
        </form>
      </div>
    );
  }
}

export default PlayerForm;
