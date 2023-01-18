import { Navigate, Route, Routes } from "react-router-dom";
import Cards from "../pages/Cards";
import Random from "../pages/Random";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/random" element={<Random />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="*" element={<Navigate to="/cards" />} />
    </Routes>
  );
};

export default AppRouter;
