import express from "express";
import { SERVER_PORT } from "../globals/environment";
import socketIO from "socket.io";
import http from "http";

export default class Server {
  public app: express.Application;
  public port: number;
  public io: socketIO.Server;
  private httpServer: http.Server;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.listenSockets();
  }

  private listenSockets() {
    console.log("listening sockets");
    this.io.on("connection", (client) => {
      console.log("new client connected");
    });
  }

  start(callback: any) {
    this.httpServer.listen(this.port, callback);
  }
}
