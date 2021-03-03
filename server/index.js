import express from "express";
import * as io from "socket.io";
import http from "http";
import router from "./router.js";
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const socketio = new io.Server(server);

app.use("/", router);

server.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
