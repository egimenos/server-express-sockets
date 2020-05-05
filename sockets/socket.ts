import { Socket } from "socket.io";
import Message from "../interfaces/message";
import socketIO from "socket.io";

export const handleDisconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log("Client disconnected");
  });
};

export const message = (client: Socket, io: socketIO.Server) => {
  client.on("message", (payload: Message, callback) => {
    console.log("Message received", payload);
    io.emit("new-message", payload);
  });
};
