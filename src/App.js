import { Route, Routes } from "react-router-dom";
import "./App.css";
import Ad from "./pages/Ad";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { getAds } from "./redux/reducers/adSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  // Retrive home page ads
  useEffect(() => {
    dispatch(getAds());
    console.log("App.js");
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads/:id" element={<Ad />} />
      </Routes>
    </div>
  );
}

export default App;
