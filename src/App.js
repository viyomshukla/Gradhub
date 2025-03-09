import logo from './logo.svg';
import './App.css';
import LoadingScreen from './component/loading';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Main from './component/main';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen/>} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
