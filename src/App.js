import CardComponent from './components/CardComponent';
import CommentSection from './components/CommentSection';
import './App.css';
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [database, setdatabase] = useState(data);
  const {username, image: {webp}} = data.currentUser;

  const addComment = (comment) => {
    console.log(comment)
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
  console.log("comments", database.comments)
  return (
    <div className="App">
      {database.comments.map(item => <CardComponent cardata={item} key={item.id} currentUser={username}/>)}
      <CommentSection currentUser={username} currentUserProfilePic={webp} onComment={addComment}/>
    </div>
  );
}

export default App;
