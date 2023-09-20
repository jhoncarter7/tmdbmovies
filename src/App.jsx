
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieSearch from './component/MovieSearch';
import MovieDetails from './component/MovieDetails';

function App() {
  return (
    <div className="App">
    <header className="App-header">
   
    <BrowserRouter>
    <Routes>
        <Route element={<MovieSearch/>} path='/'/>
       <Route element={<MovieDetails/>} path='/moviedetail/:movieId/*'/>
    </Routes>
    </BrowserRouter>
    </header>
    </div>
  );
}

export default App;
