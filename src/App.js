import Nav from "./components/Nav";
import Home from "./pages/Home";
import Article from "./components/Article";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let articleLists = [
    {
      articleLogoUrl: "http://iph.href.lu/320x260",
      title: "JavaScript数据类型及转换全解",
      info: "一文解决JavaScript中所有关于类型转换问题，包含数据类型、转换触发条件、具体转换",
      date: "2020-01-01"
    },
    {
      articleLogoUrl: "http://iph.href.lu/320x260",
      title: "JavaScript数据类型及转换全解",
      info: "一文解决JavaScript中所有关于类型转换问题，包含数据类型、转换触发条件、具体转换",
      date: "2020-01-01"
    }
  ]
  return (
    <Router>
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <div className="content">
          <Switch>
            <Route path="/lifePhoto">
            </Route>
            <Route path="/docs">
              <Article articleLists={articleLists} />
            </Route>
            <Route path="/comment">
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
