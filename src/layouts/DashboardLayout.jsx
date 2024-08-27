import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Header />
      <Sidebar />
      <div className="lg:w-[calc(100%_-_18rem)] ml-auto  mt-14 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
