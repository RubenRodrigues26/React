import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
//import Clicker from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: 'Ruben',
    imageUrl: 'images/authors/dual1.jpg',
    imageSource: 'wikimedia Comons',
    books: [
      'The Adventures of Huckleberry Finn',
      'aaaaaaaaaaaa',
      'bbbbbbbbb'
    ]
  }
];

// function getTurnData(authors){
//   const allBooks = authors.reduce(function(p, c, i) {
//     return p.concat(c.books);
//   }, []);
//   const  fourRandomBooks = shuffle(allBooks).slice(0,4);
//   const answer = sample(fourRandomBooks);

//   return {
//     books: fourRandomBooks,
//     author:authors.find((authors) =>
//       author.books.some((title) =>
//         title === answer))
//     }
// }

// const state= {
//   turnData: getTurnData(authors)
// };

const state= {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};

ReactDOM.render(
    <AuthorQuiz {...state}/>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthorQuiz a={34} b={16}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Clicker handlerClick={(letter) => {console.log(`${letter} clicked`);}} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const propsValues = {a: 2, b:3};

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthorQuiz {...propsValues}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
