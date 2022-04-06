import CardComponent from './components/CardComponent';
import CommentSection from './components/CommentSection';
import './App.css';
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [database, setdatabase] = useState(data);
  const {username, image: {webp}} = data.currentUser;

  const addComment = (comment) => {
    const obj = {
      "id": Math.floor(Math.random() * 99999999999),
      "content": comment,
      "createdAt": "1 month ago",
      "score": 0,
      "user": {
        "image": {
          "webp": webp
        }, 
        "username": username
      },
      "replies": []
    }

    setdatabase((prevdata) => {
      const database = {...prevdata};
      database.comments.push(obj);
      return database;
    })

  }

  const addReply = (replyto, reply) => {
    const obj = {
      "id": Math.floor(Math.random() * 9999999999999),
      "content": reply,
      "createdAt": "2 week ago",
      "score": 0,
      "replyingTo": replyto,
      "user": {
        "image": {
          "webp": webp
        },
        "username": username
      }
    }
    setdatabase((prevdata) => {
      const database = {...prevdata};
      database.comments.forEach((item) => {
        console.log(item)
        if (item.user.username === replyto) {
          item.replies.push(obj)
        }
      })
      return database;
    })
  }


  return (
    <div className="App">
      {database.comments.map(item => <CardComponent cardata={item} key={item.id} currentUser={[username, webp]} onReply={addReply}/>)}
      <CommentSection currentUser={username} currentUserProfilePic={webp} onComment={addComment}/>
    </div>
  );
}

export default App;
