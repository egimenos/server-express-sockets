import { Socket } from "socket.io";
import Message from "../interfaces/message";

export const handleDisconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log("Client disconnected");
  });
};

export const message = (client: Socket) => {
  client.on("message", (payload: Message, callback) => {
    console.log("Mesage received", payload);
  });
};
