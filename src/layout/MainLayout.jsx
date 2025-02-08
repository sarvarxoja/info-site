import { Outlet } from "react-router-dom";
import {  Navigation } from "../component/navigation/Navigation";

export const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};
