import {
  addNewPlayer,
  DeletePlayer,
  getOnePlayer,
  getPlayers,
  UpdatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    .post(addNewPlayer) //post endpoint
    .get(getPlayers);

  app
    .route("/players/:id")
    .get(getOnePlayer)
    .put(UpdatePlayer)
    .delete(DeletePlayer);
};

export default routes;
