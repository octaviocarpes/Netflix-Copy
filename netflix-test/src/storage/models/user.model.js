export default class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.id = btoa(username + password);
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getId() {
    return this.id;
  }
}
