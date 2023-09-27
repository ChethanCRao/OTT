import "./App.css";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Android from "./Components/Android";
import VideoButton from "./Components/VideoButton";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SignUpForm from "./Components/SignUpForm";
import SubscriptionForm from "./Components/SubscriptionForm";
import Tvseries from "./Components/Tv series";


function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/Tvseries" element={<Tvseries/>}/>
          <Route path="/Android" element={<Android />}/>
          <Route path="/VideoButton" element={<VideoButton/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/SignUpForm" element={<SignUpForm/>}/>
          <Route path="/SubscriptionForm" element={<SubscriptionForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
