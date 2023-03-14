import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [invitationGame, setInvitationGame] = useState();
  const [gameId, setGameId] = useState('');
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();

  const startPlay = (e) => {
    e.preventDefault();
    if (nickname && gameId) {
      localStorage.nickname = nickname;
      navigate('/game' + gameId);
    }
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form onSubmit={startPlay}>
        <div className="field-group">
          <div>
            <label htmlFor="nickname">Your name</label>
          </div>
          <input
            type="text"
            name="nickname"
            id="nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="field-group" onChange={(e) => setInvitationGame(e.target.id === 'ingame')}>
          <input
            type="radio"
            name="typeEnter"
            id="gen"
            value={!invitationGame}
            defaultChecked={!invitationGame}
          />
          <label htmlFor="gen">Create game</label>
          <input
            type="radio"
            name="typeEnter"
            id="ingame"
            value={invitationGame}
            defaultChecked={invitationGame}
          />
          <label htmlFor="ingame">Enter game by ID</label>
        </div>
        <div className="field-group">
          {invitationGame && (
            <>
              <div>
                <label htmlFor="gameId">Enter game ID</label>
              </div>
              <input
                type="text"
                name="gameId"
                defaultValue=""
                id="gameId"
                onChange={(e) => setGameId(e.target.value)}
              />
            </>
          )}
          {!invitationGame && (
            <>
              <button
                className="btn-gen"
                onClick={(e) => {
                  e.preventDefault();
                  setGameId(Date.now());
                }}
              >
                Generate gameId
              </button>
              <p>{gameId}</p>
            </>
          )}
        </div>
        <button type="submit" className="btn-ready">
          PLAY!
        </button>
      </form>
    </div>
  );
};
