import * as React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route
   } from "react-router-dom";
import TrackGoals from './TrackGoals/TrackGoals';
import Burns from './Burns/Burns';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Tracker from './Tracker/Tracker';
import Schedule from './Schedule/Schedule';
import Goals from './Goals/Goals';

function Main() {
    return (
    <div>
        <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route excat path='/' element={<TrackGoals />} ></Route>
          <Route path='/burns' element={<Burns />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/goals' element={<Goals />}></Route>
          <Route path='/tracker' element={<Tracker />}></Route>
          <Route path='/schedule' element={<Schedule />}></Route>
        </Routes>
        </Router>
    </div>
    );
}

export default Main;