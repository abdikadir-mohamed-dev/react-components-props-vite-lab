import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";





const posts = [
  {
    id: 1,
    title: "First Article",
    date: "May 1, 2026",
    preview: "This is my first article"
  },
  {
    id: 2,
    title:"Second Article",
    date: "May 2, 2026",
    preview: "This is my second article"
  }, 
  
];

function App() {
  return (
    <>
      <Header name="My Blog" />
      <About 
      image="https://via.placeholder.com/150"
      about="This is my Blog about React"
      />
      <ArticleList  posts={posts} />
    </>
  );
}

export default App;
