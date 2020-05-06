import { Socket } from "socket.io";
import Message from "../interfaces/message";
import socketIO from "socket.io";
import { UsersList } from "../classes/users-list";
import { User } from "../classes/user";

export const connectedUsers = new UsersList();

export const connectUser = (client: Socket) => {
  const user = new User(client.id);
  connectedUsers.addUser(user);
  console.log(connectedUsers.getUsersList());
  return user;
};

export const handleDisconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log("Client disconnected");
    connectedUsers.removeUser(client.id);
  });
};

export const message = (client: Socket, io: socketIO.Server) => {
  client.on("message", (payload: Message) => {
    console.log("Message received", payload);
    io.emit("new-message", payload);
  });
};

export const configUser = (client: Socket, io: socketIO.Server) => {
  client.on("config-user", (payload: any, callback) => {
    connectedUsers.updateName(client.id, payload.name);
    callback({
      ok: true,
      message: `User ${payload.name} configured in server`,
    });
  });
};
