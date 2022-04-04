import CardComponent from './components/CardComponent';
import CommentSection from './components/CommentSection';
import './App.css';
import data from "./data.json";
import { useState } from 'react';

function App() {
  const [database, setdatabase] = useState(data);

  return (
    <div className="App">
      {database.comments.map(item => <CardComponent cardata={item} key={item.id}/>)}
      <CommentSection/>
    </div>
  );
}

export default App;
