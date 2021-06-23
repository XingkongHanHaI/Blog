import Nav from "./components/Nav/Nav";
import HomePage from "./components/HomePage/HomgPage";
import Input from "./components/Form/Input";
import Comment from './components/Comment/Comment';
import Clock from './components/Clock/Clock';
import UserList from './components/UserList/UserList';
import Article from "./components/Article/Article";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // 评论模块s
  const [commentLists, setComment] = useState([]);
  const addComment = (commnetArticle) => {
    setComment([
      ...commentLists,
      commnetArticle
    ]);
  }
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
        <div className="nav">
          <Nav />
        </div>
        <div className="content">
          <Switch>
            <Route path="/lifePhoto">
              <UserList></UserList>
            </Route>
            <Route path="/docs">
              <Article articleLists={articleLists} />
            </Route>
            <Route path="/comment">
              <Input createComment={addComment} />
              <Comment comments={commentLists}></Comment>
              <Clock></Clock>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
