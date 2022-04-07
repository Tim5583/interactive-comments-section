import CardComponent from './components/CardComponent';
import CommentSection from './components/CommentSection';
import './App.css';
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [database, setdatabase] = useState(data);
  const {username, image: {webp}} = data.currentUser;

  const handleAddComment = (comment) => {
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

  };

  const handleAddReply = (replyto, reply) => {
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
        if (item.user.username === replyto) {
          item.replies.push(obj)
        }
      })
      return database;
    })
  };

  const handleVote = (id , voteType) => {
    setdatabase(prevdata => {

      // make deep copy 
      const database =JSON.parse(JSON.stringify(prevdata));
      let userdata = database.comments.filter(item => item.id === id)
      if (userdata.length === 0) {
        database.comments.forEach(item => {  
          userdata = item.replies.filter(item => item.id === id)
        })
      }

      let score = Number(userdata[0].score);
      if (voteType === "up") {
        score++;
      }

      if (voteType === "down") {
        score--;
      }
      userdata[0].score = score;
      return database;
    })
  };


  return (
    <div className="App">
      {database.comments.map(item => 
        <CardComponent 
          cardata={item} 
          key={item.id} 
          currentUser={[username, webp]} 
          onReply={handleAddReply}
          onVoteChange={handleVote}/>
      )}
      
      <CommentSection 
        currentUser={username} 
        currentUserProfilePic={webp} 
        onComment={handleAddComment}
      />
    </div>
  );
}

export default App;
