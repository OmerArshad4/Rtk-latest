import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

const UserLayout = ({ isPrivate, children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(
   window.innerWidth >= 1024
  );

  const toggleSidebar = () => {
  setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };
  
  handleResize(); 
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="flex min-h-screen bg-[#EDEDED]">
      {isPrivate && (
        <SideBar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      )}

      <div className={`flex-1 ${isPrivate ? "lg:ml-64" : ""}`}>
        {isPrivate && <Navbar toggleSidebar={toggleSidebar} />}
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default UserLayout;
