import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function Welcome(props) {
   return <h1>Hello, {props.name}</h1>
}
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edit" />
    </div>
  )
}

//Extracting Components:
  // function Comment(props) {
  //     return (
  //         <div className="Comment">
  //           <div className="UserInfo">
  //        <img className="Avatar"
  //         src={props.author.avatarUrl}
  //         alt={props.author.name}
  //       />
  //       <div className="UserInfo-name">
  //         {props.author.name}
  //       </div>
  //     </div>
  //     <div className="Comment-text">
  //       {props.text}
  //     </div>
  //     <div className="Comment-date">
  //       {formatDate(props.date)}
  //     </div>
  //         </div>
  //     )
  // }



// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
