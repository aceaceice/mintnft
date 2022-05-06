import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "./redux/action-creators";
import { useEffect } from "react";
import MintingPage from "./components/MintingInterface";
import Header from "./components/Header";
import NftList from "./components/NftList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(connectWallet());
  }, []);
  return (
    <div className="App">
      <Header dispatch={dispatch} state={state} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route
            path="/nftlist"
            element={<NftList dispatch={dispatch} state={state} />}
          ></Route>
          <Route
            path="/mint"
            element={<MintingPage dispatch={dispatch} state={state} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
