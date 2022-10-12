import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import CommingSoon from "./pages/CommingSoon/CommingSoon";
import CopyRight from "./components/CopyRight/CopyRight";
import ReactAudioPlayer from "react-audio-player";

function App() {
  return (
    <Router>
      <div className="audio">
        <ReactAudioPlayer
          src="/audio.wav"
          loop={true}
          autoPlay={true}
          controls={false}
        />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/platform" element={<CommingSoon />}></Route>
        <Route path="/app" element={<CommingSoon />}></Route>
        <Route path="/circlejerk" element={<CommingSoon />}></Route>
        <Route path="/more" element={<CommingSoon />}></Route>
      </Routes>
      <CopyRight />
    </Router>
  );
}

export default App;
