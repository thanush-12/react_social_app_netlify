import React from "react";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { Routes, Route } from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Social media" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;
