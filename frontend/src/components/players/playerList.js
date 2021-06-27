import React from "react";

function playerList({ players, updateCurrentPlayer }) {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Players </h4>
          {players.map((item) => (
            <a
              href="#!"
              className="collection-item"
              key={item._id}
              onClick={updateCurrentPlayer.bind(this, item)}
            >
              {item.firstName} {item.lastName}
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default playerList;
