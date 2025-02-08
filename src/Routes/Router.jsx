import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { MainLayout } from "../layout/MainLayout";

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
