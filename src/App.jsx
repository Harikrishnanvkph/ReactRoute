import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Bin from "./Stack";
import Lists from "./Lists";
import Career from "./Career";
import stack from './assets/stack.jpg'
import cyber from './assets/cyber.jpg'
import Machine_Learning from './assets/Machine_Learning.jpg'
import spring from './assets/spring.jpg'
import datascience from './assets/datascience.jpg'


// This is arr of arr, each arr has name, route, description of each page
const esteem = [
  [
    "Full Stack Development",
    "/stack",
    stack,
    `Full stack development is the process of designing, creating, testing, 
  and deploying a web application 
  from start to finish. It involves working with various technologies and 
  tools, including front-end web development, back-end web development, and 
  database development.`,
  ],
  [
    "Data Science",
    "/dataScience",
    datascience,
    `Data science is the study of data to extract 
  insights for business. It's a multidisciplinary approach that uses a combination 
  of math, statistics, artificial intelligence, and computer engineering to analyze 
  large data sets.`,
  ],
  [
    "Cyber Security",
    "/cyber",
    cyber,
    `Cybersecurity is the practice of protecting systems,
   networks, and programs from digital attacks. These cyberattacks are usually 
   aimed at accessing, changing, or destroying sensitive information; 
   extorting money from users via ransomware; or interrupting normal business 
   processes.`,
  ],
  [
    "Python development",
    "/python",
    Machine_Learning,
    `Python is a general-purpose programming language 
  that is used for developing websites and software, task automation, data analysis, 
  and data visualization. It is a high-level language, which means that it is easy 
  to read and write, and it is also an interpreted language, which means that it 
  does not need to be compiled before it can be run.`,
  ],
  [
    "Java",
    "/java",
    spring,
    `Java is a high-level, class-based, object-oriented programming 
  language that is designed to have as few implementation dependencies as possible. 
  It is a general-purpose programming language intended to let programmers write 
  once, run anywhere (WORA), meaning that compiled Java code can run on all 
  platforms that support Java without the need for recompilation.`,
  ],
];

function App() {
  // useNavigate used to navigate to other pages
  const navigate = useNavigate();

  const style = (event) => {
    // updating all element with className link backgroundColor
    document.querySelectorAll(".link").forEach((it) => {
      it.style.backgroundColor = "transparent";
    });
    // updating clicked element backgroundColor
    document.querySelector(`.${event}`).style.backgroundColor = "#0dba4b";
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row navRow mt-3 p-2">
          {/* creating nav bar to navigate between links */}
          <nav>
            <ul className="lists">
              <div
                className="link link1"
                onClick={() => {
                  navigate("/");
                  style("link1");
                }}
              >
                <li>
                  {/* Link element used load page without refreshing the page */}
                  <Link to="/">All</Link>
                </li>
              </div>
              <div
                className="link link2"
                onClick={() => {
                  navigate("/stack");
                  style("link2");
                }}
              >
                <li>
                  <Link to="/stack">Full Stack Development</Link>
                </li>
              </div>
              <div
                className="link link3"
                onClick={() => {
                  navigate("/dataScience");
                  style("link3");
                }}
              >
                <li>
                  <Link to="/dataScience">Data Science</Link>
                </li>
              </div>
              <div
                className="link link4"
                onClick={() => {
                  navigate("/cyber");
                  style("link4");
                }}
              >
                <li>
                  <Link to="/cyber">Cyber Security</Link>
                </li>
              </div>
              <div
                className="link link5"
                onClick={() => {
                  navigate("/career");
                  style("link5");
                }}
              >
                <li>
                  <Link to="/career">Career</Link>
                </li>
              </div>
            </ul>
            <hr />
          </nav>
        </div>
        {/* using Routes to create Route element */}
        <Routes>
          {/* creating Route to home page */}
          <Route path="/" element={<Lists list={esteem} />} />
          {/* creating Route to all elements in arr */}
          {esteem.map((it, index) => (
            <Route
              key={index}
              path={it[1]}
              element={
                <div className="row d-flex justify-content-center">
                  <Bin
                    key={index}
                    name={it[0]}
                    route={it[1]}
                    src={it[2]}
                    className="col-md-6 col-sm-12"
                    description={it[3]}
                    imgClass="w-100 h-100"
                  />
                </div>
              }
            />
          ))}
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
