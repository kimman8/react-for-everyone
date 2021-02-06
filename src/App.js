import React, { useState, useEffect, useRef } from "react";
import { MoviesList } from "./movies/MoviesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MoviesList />
    </div>
  );
}

export default App;
