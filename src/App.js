import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/calendar.css';
import { useEffect, useState } from 'react';
import Calendar from './routes/Calendar.js';
import {Routes, Route, Link} from 'react-router-dom'
import axios from 'axios';
import SideBar from './components/SideBar.js';

function App() {

//  useEffect(()=>{
//    axios.get('url',{
//      //전송할 데이터, 로그인 정보
//    })
//    .then((data)=>{
//      //data는 받는 정보
//    });
//    axios.post('',{
//      //JSON형식으로 보낼 예정, 따로 eventListener에 뺄 예정
//    });
//    axios.put('',{
//      //JSON형식으로 보낼 예정, 따로 eventListener에 뺄 예정
//    });
//  });

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <div>
            <SideBar></SideBar>
            <Calendar></Calendar>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;