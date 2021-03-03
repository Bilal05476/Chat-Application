import { useState } from "react";
import { Link } from "react-router-dom";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Enter Name"
            className="joinInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <input
            placeholder="Enter Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat/?name=${name}&room=${room}`}
          className="button mt-20"
          type="submit"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Join;
