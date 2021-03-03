import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const PORT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(PORT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room });

    console.log(socket);
  }, [PORT, location.search]);
  return (
    <div>
      {name} <br />
      {room}
    </div>
  );
};

export default Chat;
