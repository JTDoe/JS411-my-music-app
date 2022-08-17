import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import CustomCard from "./components/customCard";
import "./App.css";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import { Select } from "@mui/material";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [volume, setVolume] = useState(true);
  const [quality, setQuality] = useState("");

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

  useEffect(() => {
    console.log(volume);
  }, [volume]);

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
                className="OnlineMode"
                state={isToggled}
                setState={setIsToggled}
                title="Online Mode"
                body=" Is this application connected to the internet?"
                component={Switch}
              />
              <CustomCard
                className="MasterVolume"
                state={volume}
                setState={setVolume}
                title="Master Volume"
                body="Overrides all other sound settings in this application"
                component={Slider}
              />
              <CustomCard
                className="SoundQuality"
                state={quality}
                setState={setQuality}
                title="Sound Quality"
                body="Manually control the music quality in event of poor connection"
                component={Select}
              />
            </div>
            <h4>System Notifications:</h4>
            {isToggled === true && (
              <span>
                Your application is offline. You won't be able to share or
                stream music to other devices.
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
