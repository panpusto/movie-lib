import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './components/Root';
import MoviesList from './features/movies/MoviesList';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route element={<MoviesList />} index />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
