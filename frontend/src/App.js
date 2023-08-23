import "./App.css";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Android from "./Components/Android";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import VideoButton from "./Components/VideoButton";
import Footer from "./Components/Footer";
import SignUpForm from "./Components/SignUpForm";
import SubscriptionForm from "./Components/SubscriptionForm";


function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Android" element={<Android />} />
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/VideoButton" element={<VideoButton/>}/>
          <Route path="/SignUpForm" element={<SignUpForm/>}/>
          <Route path="/SubscriptionForm" element={<SubscriptionForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
