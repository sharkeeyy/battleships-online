import React from 'react';

const ActiveInfo = ({ shipsReady = false, canShoot = false, ready }) => {
  console.log(shipsReady);
  if (!shipsReady) {
    return (
      <button className="btn-reay" onClick={ready}>
        Ships are ready
      </button>
    );
  }
  return <div>{canShoot ? <p>Shoot!</p> : <p>Opponents is shooting</p>}</div>;
};
