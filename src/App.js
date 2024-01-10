import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/calendar.css';
import { useEffect, useState } from 'react';
import Calendar from './routes/Calendar.js';
import {Routes, Route, Link} from 'react-router-dom'
import axios from 'axios';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div>test</div>}></Route>
      </Routes>
      <Calendar></Calendar>
      <TodoItem></TodoItem>
    </div>
  );
}

export default App;