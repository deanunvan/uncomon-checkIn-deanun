import { Route, Routes } from "react-router-dom";
import { MainDash, SignIn, SignUp, ReportsAndAnalytics, AbsenceTrends, Help} from "./components/pages";
import { Navbar } from "./components/Navbar";
import 'remixicon/fonts/remixicon.css';
import { faker } from '@faker-js/faker';



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={<MainDash />} />
        <Route path="/reportsandanalytics" element={<ReportsAndAnalytics />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/absencetrends" element={<AbsenceTrends />} />
        <Route path="/Help" element={<Help />} />
      </Routes>


      </div>
    </div>
  );
}

export default App;
