import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Maps from "./Components/MakerMap/index";
import Layout from "./Layout/Layout";
import AddLocition from "./Pages/AddLocition";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Posts/Post";
import Posts from "./Pages/Posts";
import Register from "./Pages/register";
  import SearchData from "./Pages/search/Search";

class App extends Component {
  async componentDidMount() {
    fetch(`${process.env.REACT_APP_URL_API}/v1/location/provinces/`).then(resp=>resp.json()).then(resps=>{
      this.setState({states:resps})
    })
    if (localStorage.getItem("token")) {
      this.setState({ login: true });
    }
  }

  state = {
    login: true,
    searchedPost :[],
    post: '',
    states:'',

    posts: []
  };
  setPosts = async (state) => {
    await fetch(`${process.env.REACT_APP_URL_API}/v1/posts/?province__title=${state}`).then(resp => {
      return resp.json()
    }).then(resps => {
      this.setState({ posts: resps })
    })
  }
  searched = (item)=>{
    fetch(`${process.env.REACT_APP_URL_API}/v1/posts/?search=${item}`).then(resp => resp.json()).then(
            resps => {
             this.setState({searchedPost:resps})
            })
  }

  render() {
    return (
      <Router>
        <Layout >
          <Routes>
            <Route path="/" element={<Home states={this.state.states} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:id" element={<Post getPost={this.setPost} post={this.state.post} />} />
            <Route path="/posts/:name" element={<Posts setPosts={this.setPosts} posts={this.state.posts} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search/:value" element={<SearchData posts={this.searchedPost}  searched={this.searched} />} />
            <Route
              path="/addlocition"
              element={
                <AddLocition
                  hasLogin={this.state.login}
                  states={this.state.states}
                />
              }
            />
            <Route
              path="/Map"
              element={
                <Maps hasLogin={this.state.login} states={this.state.states} />
              }
            />
          </Routes>
        </Layout>
      </Router>
    );
  }
}

export default App;
