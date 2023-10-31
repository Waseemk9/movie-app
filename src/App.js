import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route index element= {<h1>Movie App</h1>}></Route>
          <Route path="movie/login" element={ <h1> Login Page</h1>}></Route>
          <Route path="movie/search" element={ <h1> Search</h1>}></Route>
          <Route path="movie/movies" element={ <h1> Movies details page</h1>}></Route>
          <Route path="/*" element= {<h1> Error Page </h1>} ></Route>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
