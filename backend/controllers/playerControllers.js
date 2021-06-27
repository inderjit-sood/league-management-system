import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);
//players collection in the db (first object of the model constructor)

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};
export const getPlayers = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.send(err);
    }
    res.json(players);
  });
};
export const getOnePlayer = (req, res) => {
  Player.findById(req.params.id, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};
export const UpdatePlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.json(player);
  });
};
export const DeletePlayer = (req, res) => {
  Player.remove({ _id: req.params.id }, (err, player) => {
    if (err) {
      res.send(err);
    }
    res.send("Successfully deleted the player!");
  });
};
