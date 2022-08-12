import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import CustomCard from "./components/customCard";
import "./App.css";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

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
            <CustomCard
              state={isToggled}
              setState={setIsToggled}
              title="Online Mode"
              body=" Is this application connected to the internet?"
              component={Switch}
            />
            <CustomCard
              state={isToggled}
              setState={setIsToggled}
              title="Master Volume"
              body=" Is this application connected to the internet?"
              component={Slider}
            />
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
