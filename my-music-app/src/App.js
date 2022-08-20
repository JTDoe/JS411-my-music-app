import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import CustomCard from "./components/customCard";
import "./App.css";
import Switch from "@mui/material/Switch";
// import Slider from "@mui/material/Slider";
// import { Select } from "@mui/material";
import ContinuousSlider from "./components/VolumeSlider";
import BasicSelect from "./components/Quality";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [volume, setVolume] = useState({});
  const [quality, setQuality] = useState(20);

  // useEffect(() => {
  //   console.log(isToggled);
  // }, [isToggled]);

  return (
    <main>
      <Header title="Music Dashboard" />
      <div className={`App`}>
        {isLoggedIn === false ? (
          <form class="form" action="">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h2>Welcome User!</h2>
            {/* // This is where we will put our cards */}
            <div className="Cards">
              <CustomCard
                state={isToggled}
                setState={setIsToggled}
                title="Online Mode"
                body=" Is this application connected to the internet?"
                component={Switch}
              />

              <CustomCard
                state={volume}
                setState={setVolume}
                title="Master Volume"
                body="Overrides all other sound settings in this application"
                component={ContinuousSlider}
              />

              <CustomCard
                state={quality}
                setState={setQuality}
                title="Sound Quality"
                body="Manually control the music quality in event of poor connection"
                component={BasicSelect}
              />
            </div>
            <h4>System Notifications:</h4>
            {isToggled === true && (
              <span>
                Your application is offline. You won't be able to share or
                stream music to other devices.
              </span>
            )}
            {setVolume > 60 && (
              <span>
                Listening to music at a high volume could cause long-term
                hearing loss.
              </span>
            )}
            {setQuality === 10 && (
              <span>
                Music quality is degraded. Increase quality if your connection
                allows it.
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
