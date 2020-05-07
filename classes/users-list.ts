import { User } from "./user";

export class UsersList {
  private list: User[] = [];
  constructor() {}

  public addUser(user: User) {
    this.list = this.list.concat(user);
    return user;
  }

  public updateName(id: string, name: string) {
    const user = this.list.find((user: User) => user.id === id);
    if (user) {
      user.name = name;
      console.log(`updated user with id ${id}`, user.name);
      console.log(this.list);
    }
  }

  public getUsersList() {
    return this.list.filter((user) => user.name !== "not identified");
  }
  public getUser(id: string) {
    return this.list.find((user: User) => user.id === id);
  }

  public getUsersByRoom(room: string) {
    return this.list.filter((user: User) => user.room === room);
  }

  public removeUser(id: string) {
    console.log("removing user with id:", id);
    const tempUser = this.getUser(id);
    this.list = this.list.filter((user: User) => user.id !== id);
    console.log("New list of connected users:", this.list);
    return tempUser;
  }
}
