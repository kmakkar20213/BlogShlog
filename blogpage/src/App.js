import './App.css';
import Navibar from './components/Navibar';
import Homepage from './components/Homepage';
import Foot from './components/Foot';
// import Post from './components/Post';
// import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Navibar></Navibar>
      <Homepage></Homepage>
      <Foot></Foot>
    </div>
  );
}

export default App;
