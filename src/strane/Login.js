import { useNavigate } from "react-router-dom";
import LoginForm from "../komponente/LoginForm";

function Login() {
  const users = [
    { username: "djordje", password: "peka", email: "djordje@gmail.com" },
    { username: "milan", password: "posle", email: "milan@gmail.com" },
    { username: "igor", password: "batonga26", email: "batigor@gmail.com" },
  ];

  const navigate = useNavigate();

  function prijaviSe(username, password) {
    for (const user of users) {
      if (user.username === username && user.password === password) {
        alert("Login uspešan!");
        navigate("/knjige");
        return;
      }
    }

    alert("Pogrešan username ili password!");
  }

  return (
    <div>
      <LoginForm prijaviSe={prijaviSe} />
    </div>
  );
}

export default Login;
