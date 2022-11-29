import "../css/Login.css";
import reactStringReplace from "react-string-replace";
import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function ContainerExample() {
  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setUserLogin({
      ...userLogin,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUserLogin({
      ...userLogin,
      password: e.target.value,
    });
  };

  const onSubmitLogin = () => {
    try {
      axios.post("/api/login", userLogin).then((res) => {
        if (res.data.user.role === "guru") {
          navigate(`/profile`);
        } else {
          navigate("/services");
        }
        toast.success("Logged In");
        getLoggedIn();
      });
    } catch (err) {
      toast.warning(err.response.data.errorMessage);
      console.log(err.response.data.errorMessage);
    }
  };

  var facts = [
    "India houses the largest school in the world, in terms of the number of students located in one school. The City Montessori School in Lucknow has more than 32,000 students.",
    "India has the second-largest school system in the world",
    "Children in Finland begin schooling only at the age of seven. Moreover, Finland regularly tops rankings of school systems around the world conducted by the World Economic Forum every year, thanks to its 'no banding system' and relatively low pressure on academic work.",
    "The average length of a school day is 6.5 hours.",
    "World’s oldest school is in Canterbury, England. The King’s School, as it is named, was founded in 597 AD. ",
    "It is not mandatory to attend a pre-primary or early childhood development and education class before joining primary school for children in Kenya.",
  ];
  var random = Math.floor(Math.random() * facts.length);
  var words = ["school", "children", "students"];
  var word = words[random] || facts[random].split(" ")[random];
  return (
    <div className="login-container">
      <div className="login-row row">
        <div className="left-col col">
          <h3 className="login-heading login-text">Hello Again!</h3>
          <p className="login-sub-heading login-text">
            Welcome back you have been missed!
          </p>
          <form action="" className="d-flex row justify-content-center">
            <input
              type="text"
              className="login-input form-control col-lg-8 col-md-10 py-2"
              name="username"
              placeholder="Enter Username"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              className="login-input form-control col-lg-8 col-md-10 py-2"
              name="password"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
            />
            <div className="d-flex row justify-content-between login-submit-row col-lg-9 col-md-10">
              <input
                type="submit"
                value="Login"
                className="login-btn px-3 py-2"
                style={{ color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitLogin();
                }}
              />
              <a href="/resetPassword" className="login-recover-password">
                Recover Password
              </a>
            </div>
          </form>
        </div>
        <div className="right-col col-5 d-lg-block d-none text-center">
          <h1 className="login-fact-heading">Education FACTS !!</h1>
          <p className="fact">
            {reactStringReplace(facts[random], "school", (match, i) => (
              <span style={{ color: "#FF9E67" }}>{match}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContainerExample;
