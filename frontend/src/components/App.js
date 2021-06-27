import "./App.css";
import PlayerList from "./players/playerList";
import PlayerForm from "./players/playerForm";
import PlayerSingle from "./players/playerSingle";
import NavBar from "./NavBar";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: null,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000/players";

    axios
      .get(url)
      .then((resp) => {
        this.setState({
          players: resp.data,
        });
      })
      .catch((err) => console.log(err));
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle player={this.state.currentPlayer} />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
