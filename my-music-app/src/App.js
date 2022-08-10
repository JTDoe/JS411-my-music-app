import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";

function App() {
  return (
    <main>
      <Header title="Music Dashboard" />
      <div className={'App'}>
        <form class="form">
          <Input label="Username" />
          <Input label="Password" type="password" />
          <Button variant="contained">Login</Button>
        </form>
      </div>
    </main>
  );
}

export default App;
