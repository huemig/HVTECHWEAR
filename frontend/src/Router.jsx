import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Items from "./containers/items";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </>
  );
};

export default Routers;
