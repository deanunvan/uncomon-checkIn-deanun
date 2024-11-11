import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp } from "./components/pages";
import { Navbar } from "./components/Navbar";
import { Students, ReportsAndAnalytics, Home } from "./components/pages";
import 'remixicon/fonts/remixicon.css';
import { StudentDetail } from './components/pages/StudentDetail';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} />
        <Route path="/reportsandanalytics" element={<ReportsAndAnalytics />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/students/:id" element={<StudentDetail />} />
      </Routes>


      </div>
    </div>
  );
}

export default App;
