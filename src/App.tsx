import "./App.css";
import Snowfall from "./components/Snowfall";
import Calendar from "./components/Calendar";
import ShareBtn from "./components/ShareBtn";
import MusicPlay from "./components/MusicPlay/inidex";

function App() {
  return (
    <div className="wrapper">
      <Snowfall />
      <Calendar />
      <ShareBtn />
      <MusicPlay />
      <p className="copyright">
        Copyright ⓒ TeamSparta All rights reserved. ☃️
      </p>
    </div>
  );
}

export default App;
