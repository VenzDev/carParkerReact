import Api from "./Api";

interface IForm {
  email: string;
  password: string;
  name: string;
}

interface ILogin {
  email: string;
  password: string;
}

export default {
  register(form: IForm) {
    return Api.post("/register", form);
  },
  login(login: ILogin) {
    return Api.post("/login", login);
  },
  logout() {
    return Api.post("/logout");
  },
  auth() {
    return Api.get("/user");
  },
};
