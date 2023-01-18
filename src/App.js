import {HashRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar";
import "./style/App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <AppRouter />
    </HashRouter>
  );
};

export default App;
