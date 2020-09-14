import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

interface IHelloWorldData {
  status: string;
  message: string;
}

function App() {
  const [data, setData] = useState<IHelloWorldData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await axios.get("http://api.carparker.tk/api/v1/status");
      setData(fetchedData.data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data && <p>{data.status}</p>}
        {data && <p>{data.message}</p>}
      </header>
    </div>
  );
}

export default App;
