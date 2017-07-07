export class User {

  username: string;

  password: string;


  getUser() {
    return this.username;
  }

  getPwd() {
    return this.password;
  }

  setUser(user: string) {
    this.username = user;
  }

  setPwd(pass: string) {
    this.password = pass;
  }
}
