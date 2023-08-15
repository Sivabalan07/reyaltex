import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {Home , Contact} from "./component/Home.component";
import * as data from './File.json';

// let ld=data;
function App() {
  // ld.contact={
  //   In : "This is the contact information generated using json file."
  // };
  // const fs=require('fs');
  // fs.writeFile('File.json', JSON.stringify(this.state));
  // console.log(ld);
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          }
        />

        <Route path="Home" element ={ <Home/>} />
        <Route path="contact" element ={ <Contact/>} />
        <Route path="*" element ={ <Navigate to="home"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
