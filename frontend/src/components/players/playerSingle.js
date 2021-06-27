import React from "react";
import soccerImg from "./soccer.jpeg";

function playerSingle(props) {
  return (
    <div>
      {props.player && (
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={soccerImg} alt="Soccer" />
                <span className="card-title">
                  {props.player.firstName} {props.player.lastName}
                </span>
              </div>
              <div className="card-content">
                <p>Email: {props.player.email}</p>
              </div>
              <div className="card-action">
                <a href="www.google.com">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default playerSingle;
