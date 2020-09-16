import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

// function AuthorQuiz(props) {
//   return (
//   <div>Author Quiz Number : {props.a + props.b}</div>
//   );
// }

// function Clicker({handlerClick}) {
//   return <div>
//     <button onClick={ (e) => {handlerClick('A');}}>A</button>
//     <button onClick={ (e) => {handlerClick('B');}}>B</button>
//   </div>;
// }

function Hero(props) {
  return (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select  the book written by the author shown</p>
    </div>
  </div>
  );
}

function Book({title}) {
  return (
  <div className="answer">
    <h4>{title}</h4>
  </div>
  );
}

function Turn(author, books) {
  return (
  <div className="rom turn" style={{backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {/* {books.map((title) => <Book title={title} key={title} />)} */}
      {books.map((title) => <Book title={title} key={title} />)}
    </div>
  </div>
  );
}

function Continue(props) {
  return (
  <div></div>
  );
}

function Footer(props) {
  return (
  <div id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">All images are from: www.wiki.com</p>
    </div>
  </div>
  );
}

function Foto(props) {
  return (
  <div></div>
  );
}


function AuthorQuiz({turnData}) {
    return (
  <div className="container-fluid">
    <Hero />
    <Turn {...turnData}/>
    <Continue />
    <Footer />
  </div>
  )
};

export default AuthorQuiz;
//export default Clicker;
