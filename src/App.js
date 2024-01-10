import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import axios from 'axios';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <TodoItem></TodoItem>
    </div>
  );
}

export default App;
