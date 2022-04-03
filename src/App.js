import CardComponent from './components/CardComponent';
import './App.css';
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {/* {data.comments.forEach(item => {<Card gg={item}/>})} */}
      <CardComponent cardata={data.comments[1]}/>
    </div>
  );
}

export default App;
