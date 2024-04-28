import axios from "axios";
class AuthServices {
  register({ name, email, password }) {
    axios
      .post("http://localhost:8000/api/v1/signUp", {
        userName: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => {
        console.log("bad request");
      });
  }
}

const authService = new AuthServices();

export default authService;
