import { RxCross2 } from "react-icons/rx";
import { memo, useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Images from "../../HelperMethods/ImgConstants";
import { useDispatch, useSelector } from "react-redux";
import { customLogout } from "../../Redux/features/Auth/authSlice";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("");
  // const { user } = useSelector((state) => state.user);
 
     const  user = {
      role:"agent",
      // role:"admin",
     }
  const LogOut = useCallback(() => {
    dispatch(customLogout());
  }, []);

  const AdminPages  = [
    {
      title: "Dashboard",
      link: "/admin/dashboard",
      icon: <img src={Images.dashboardLogo} alt="Dashboard" className="w-5 h-5" />,
    },
    {
      title: "Leads",
      link: "/admin/leads",
      icon: <img src={Images.contactUsLogo} alt="Leads" className="w-5 h-5" />,
    },
    {
      title: "Call Analytics",
     link: "/admin/call",
      icon: <img src={Images.analyticsLogo} alt="analytics" className="w-5 h-5" />,
    },

    
    
    {
      title: "Team",
      link: "/admin/tasks",
      icon: <img src={Images.teamsLogo} alt="Teams" className="w-5 h-5" />,
    },


    {
      title: "Settings",
      link: "/admin/settings",
      icon: <img src={Images.settingLogo} alt="Settings" className="w-5 h-5" />,
    },
  ];
    const AgentPages = [
    {
      title: "Dashboard",
      link: "/agent/dashboard",
      icon: <img src={Images.dashboardLogo} alt="Dashboard" className="w-5 h-5" />,
    },
    {
      title: "Leads",
      link: "/agent/leads",
      icon: <img src={Images.contactUsLogo} alt="Leads" className="w-5 h-5" />,
    },
     {
      title: "Call Analytics",
     link: "/agent/call",
      icon: <img src={Images.analyticsLogo} alt="analytics" className="w-5 h-5" />,
    },
         {
      title: "Email",
      link: "/agent/email",
      icon: <img src={Images.analyticsLogo} alt="analytics" className="w-5 h-5" />,
    },
       {
      title: "Calendar",
      link: "/agent/calendar",
      icon: <img src={Images.analyticsLogo} alt="analytics" className="w-5 h-5" />,
    },
    {
      title: "Team",
      link: "/agent/team",
      icon: <img src={Images.teamsLogo} alt="Teams" className="w-5 h-5" />,
    },


    {
      title: "Settings",
      link: "/agent/settings",
      icon: <img src={Images.settingLogo} alt="Settings" className="w-5 h-5" />,
    },
  ];

  const sideBarLinks = user?.role === "admin" ? AdminPages : AgentPages;

  return (
    isSidebarOpen && (
      <div className="bg-white h-full fixed top-0 transition-all w-64 overflow-y-auto z-[1000]">
        <div>
          <div className="block lg:hidden">
            <div className="flex justify-between items-center p-4">
              <h3 className="font-semibold text-xl">Sales Ai</h3>
              <RxCross2
                size={24}
                onClick={toggleSidebar}
                className="text-white hover:bg-gray-300 hover:text-red-600"
              />
            </div>
          </div>

          <div className="p-6">
            <img
              src={Images.botLogo}
              alt="SniffyBot Logo"
              className="w-full sm:w-[200px] md:w-[179px] h-auto object-cover"
            />
          </div>

          <div className="flex flex-col p-4 space-y-4  ">
            {sideBarLinks.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`flex items-center p-3 space-x-3 w-full rounded-lg group
                ${path === item.link ? "text-[#3B76F6]" : "text-[#3E3D3D] hover:text-[#3B76F6]"}`}
              >
                <div
                  className={`w-5 h-5
                  ${path === item.link ? "text-[#3B76F6]" : "group-hover:text-[#3B76F6] text-[#3E3D3D]"}`}
                >
                  {item.icon}
                </div>
                <span
                  className={`font-normal text-base leading-6
                  ${path === item.link ? "text-[#3B76F6]" : "group-hover:text-[#3B76F6] text-[#3E3D3D]"}`}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    ) 
  );
};

export default memo(Sidebar);
