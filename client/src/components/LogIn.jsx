import "../css/Login.css";
import reactStringReplace from "react-string-replace";

function ContainerExample() {
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
  console.log("word : " + word);
  return (
    <div className="login-container">
      <div className="login-row row">
        <div className="left-col col">
          <h3 className="login-heading login-text">Hello Again!</h3>
          <p className="login-sub-heading login-text">
            Welcome back you have been missed!
          </p>
          <input
            type="text"
            className="login-input"
            name="username"
            placeholder="Enter Username"
          />
          <input
            type="password"
            className="login-input"
            name="password"
            placeholder="Enter Password"
          />
          <div className="row login-submit-row">
            <div className="col">
              <input type="submit" value="Login" className="login-btn" />
            </div>
            <div className="col">
              <a href="#" className="login-recover-password">
                Recover Password
              </a>
            </div>
          </div>
        </div>
        <div className="right-col col text-center">
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
